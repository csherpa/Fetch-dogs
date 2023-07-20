import axios from "axios";
import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  isAuthenticated,
} from "~/server/api/trpc";
import { type Dog } from "../models/dogs";
import { type Match } from "../models/match";

const basePath = "https://frontend-take-home-service.fetch.com";

export const dogsRouter = createTRPCRouter({
  breeds: publicProcedure.use(isAuthenticated).query(async ({ ctx }) => {
    const breedObj = await axios({
      method: "get",
      url: `${basePath}/dogs/breeds`,
      headers: {
        Cookie: `fetch-access-token=${ctx.cookie}`,
      },
    });
    return { breeds: breedObj.data };
  }),

  searchDogs: publicProcedure
    .use(isAuthenticated)
    .input(
      z.object({
        from: z.number().default(0),
        size: z.number().nonnegative().default(20),
        breeds: z.string().array(),
      })
    )
    .query(async ({ input, ctx }) => {
      const res = await axios({
        method: "get",
        url: `${basePath}/dogs/search`,
        params: {
          from: input.from,
          size: input.size,
          breeds: input.breeds,
        },
        headers: {
          Cookie: `fetch-access-token=${ctx.cookie}`,
        },
      });
      const dogObj = await axios({
        method: "post",
        url: `${basePath}/dogs`,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        data: res.data.resultIds,
        headers: {
          Cookie: `fetch-access-token=${ctx.cookie}`,
        },
      });

      const matchDog = await axios({
        method: "post",
        url: `${basePath}/dogs/match`,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        data: res.data.resultIds,
        headers: {
          Cookie: `fetch-access-token=${ctx.cookie}`,
        },
      });

      return {
        data: res.data,
        next: res.data.next,
        prev: res.data.prev,
        totalNumberOfResults: res.data.total,
        dogObj: dogObj.data as Dog,
        match: matchDog.data as Match,
      };
    }),
});
