import * as stylex from "@stylexjs/stylex";
import { createFileRoute } from "@tanstack/solid-router";

const styles = stylex.create({
  container: {
    padding: "1rem",
    textAlign: "center",
  },
});

const Home = () => (
  <div {...stylex.props(styles.container)}>
    <h1>Welcome to TanStack Start</h1>
    <p>
      Edit <code>src/routes/index.tsx</code> to get started.
    </p>
  </div>
);

export const Route = createFileRoute("/")({ component: Home });
