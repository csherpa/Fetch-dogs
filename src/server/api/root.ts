import { authRouter } from "./routers/authRouter";
import { createTRPCRouter } from "~/server/api/trpc";
import { dogsRouter } from "./routers/dogsRouter";
import { locationRouter } from "./routers/locationRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  auth: authRouter,
  dogs: dogsRouter,
  location: locationRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
