import axios from "axios";
import {
  createTRPCRouter,
  publicProcedure,
  isAuthenticated,
} from "~/server/api/trpc";

export const dogsRouter = createTRPCRouter({
  breeds: publicProcedure.use(isAuthenticated).query(async ({ ctx }) => {
    const res = await axios({
      method: "get",
      url: "https://frontend-take-home-service.fetch.com/dogs/breeds",
      headers: {
        Cookie: `fetch-access-token=${ctx.cookie}`,
      },
    });

    return { data: res.data };
  }),
});
