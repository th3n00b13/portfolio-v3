import { createRouter as createTanStackRouter } from "@tanstack/solid-router";

import { routeTree } from "./routeTree.gen";

declare module "@tanstack/solid-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}

export const getRouter = () => {
  const router = createTanStackRouter({
    defaultPreload: "intent",

    defaultPreloadStaleTime: 0,

    routeTree,

    scrollRestoration: true,
  });

  return router;
};
