import { HeadContent, Outlet, Scripts, createRootRouteWithContext } from "@tanstack/solid-router";
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";
import { Suspense, createEffect, createRoot } from "solid-js";
import { HydrationScript } from "solid-js/web";

import styleCss from "../styles.css?url";

const useRuntime = createRoot(() => {
  if (import.meta.env.DEV) {
    // @ts-expect-error -- Simply cannot, this is workaround that officially provided by stylexjs to load the runtime in development mode
    createEffect(() => import("virtual:stylex:runtime"));
    return true;
  }
  return false;
});

export const RootComponent = () => (
  <html lang="ja">
    <head>
      <HydrationScript />
      <HeadContent />
    </head>
    <body>
      <Suspense>
        <Outlet />
        <TanStackRouterDevtools />
      </Suspense>
      <Scripts />
    </body>
  </html>
);

export const Route = createRootRouteWithContext()({
  head: () => ({
    links: [
      { href: styleCss, rel: "stylesheet" },
      ...(useRuntime ? [{ href: "/virtual:stylex.css", rek: "stylesheet" }] : []),
    ],
    meta: [
      { charset: "utf8" },
      { content: "width=device-width,initial-scale=1", name: "viewport" },
    ],
  }),
  shellComponent: RootComponent,
});
