import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I was 99.7% confident we'd win the bounty. The other 0.3% was the entire competition.";

if (LINE.length === 0 || LINE.length > 200) {
  console.error(`entry must be 1-200 characters, got ${LINE.length}`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
