import axios, { type AxiosResponse } from "axios";
import { z } from "zod";
import {
  createTRPCRouter,
  isAuthenticated,
  publicProcedure,
} from "~/server/api/trpc";

export const locationRouter = createTRPCRouter({
  location: publicProcedure
    .use(isAuthenticated)
    .input(z.object({ locationObj: z.string().array() }))
    .query(async ({ input, ctx }) => {
      const res: AxiosResponse<Response> = await axios({
        method: "post",
        url: "https://frontend-take-home-service.fetch.com/location",
        data: input.locationObj,
        headers: {
          Cookie: `fetch-access-token=${ctx.cookie}`,
        },
      });
      console.log(res.data);
      return { data: res.data };
    }),
});
