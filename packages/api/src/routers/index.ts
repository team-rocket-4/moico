import { router } from "../trpc";
import { authRouter } from "./auth";
import { cafe24Router } from "./cafe24";

export const appRouter = router({
  auth: authRouter,
  cafe24: cafe24Router,
});

export type AppRouter = typeof appRouter;
