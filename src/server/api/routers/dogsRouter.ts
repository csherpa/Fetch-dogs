import axios, { type AxiosResponse } from "axios";
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
    const res: AxiosResponse<Response> = await axios({
      method: "get",
      url: `${basePath}/dogs/breeds`,
      headers: {
        Cookie: `fetch-access-token=${ctx.cookie}`,
      },
    });
    return { data: res.data };
  }),

  searchDogs: publicProcedure
    .use(isAuthenticated)
    .input(
      z.object({
        breeds: z.string().array(),
      })
    )
    .query(async ({ input, ctx }) => {
      const res = await axios({
        method: "get",
        url: `${basePath}/dogs/search`,
        params: {
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

      const matchDog: AxiosResponse<Response> = await axios({
        method: "post",
        url: `${basePath}/dogs/match`,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        data: res.data.resultIds,
        headers: {
          Cookie: `fetch-access-token=${ctx.cookie}`,
        },
      });
      return {
        next: res.data.next,
        data: dogObj.data as Dog,
        match: matchDog.data,
      };
    }),
});
