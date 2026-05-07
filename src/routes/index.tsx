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
    <h1>ポートフォリオ(仮)</h1>
    <p>まだ基盤を作っただけなので何もありません</p>
  </div>
);

export const Route = createFileRoute("/")({ component: Home });
