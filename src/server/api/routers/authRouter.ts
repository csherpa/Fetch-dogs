import axios, { type AxiosResponse } from "axios";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const authRouter = createTRPCRouter({
  login: publicProcedure
    .input(z.object({ name: z.string(), email: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const res: AxiosResponse<Response> = await axios({
        method: "post",
        url: "https://frontend-take-home-service.fetch.com/auth/login",
        data: {
          name: input.name,
          email: input.email,
        },
      });
      if (res?.headers?.["set-cookie"]) {
        ctx.res.setHeader("set-cookie", res.headers["set-cookie"]);
      }

      return { data: res.data };
    }),
  logout: publicProcedure.mutation(({ ctx }) => {
    ctx.res.setHeader(
      "Set-Cookie",
      "fetch-access-token=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Strict"
    );
    return { success: true, message: "Logged out successfully" };
  }),
});
