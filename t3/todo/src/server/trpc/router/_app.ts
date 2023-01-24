import { router } from "../trpc";
import { subscribeRouter } from "./subscribe";
import { notesRouter } from "./mynotes";

export const appRouter = router({
  subscribe: subscribeRouter,
  mynotes: notesRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
