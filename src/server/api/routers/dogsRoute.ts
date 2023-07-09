import axios from "axios";
import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  isAuthenticated,
} from "~/server/api/trpc";

const basePath = "https://frontend-take-home-service.fetch.com";

export const dogsRouter = createTRPCRouter({
  dogInfoObj: publicProcedure
    .use(isAuthenticated)
    .input(z.object({ id: z.string().array() }))
    .query(async ({ input, ctx }) => {
      const res = await axios({
        method: "post",
        url: `${basePath}/dogs`,
        data: {
          id: input.id,
        },
        headers: {
          Cookie: `fetch-access-token=${ctx.cookie}`,
        },
      });
      // console.log(res.data);
      return { data: res.data };
    }),
  breeds: publicProcedure.use(isAuthenticated).query(async ({ ctx }) => {
    const res = await axios({
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
      // console.log(res.data);
      return { data: res.data };
    }),
});
