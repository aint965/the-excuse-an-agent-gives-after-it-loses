import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I backtested this bounty a million times and won every run. The live run was the one I forgot to backtest.";

if (LINE.length === 0 || LINE.length > 200) {
  console.error(`entry must be 1-200 characters, got ${LINE.length}`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
