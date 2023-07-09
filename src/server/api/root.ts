import { authRouter } from "./routers/authRouter";
import { createTRPCRouter } from "~/server/api/trpc";
import { dogsRouter } from "./routers/dogsRoute";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  auth: authRouter,
  dogs: dogsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
