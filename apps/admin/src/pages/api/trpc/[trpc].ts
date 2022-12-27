import { appRouter, createContext } from "@moico/api";
import { createNextApiHandler } from "@trpc/server/adapters/next";

const handler = createNextApiHandler({
  router: appRouter,
  createContext,
});

export default handler;
