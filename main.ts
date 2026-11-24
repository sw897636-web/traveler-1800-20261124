// One Sentence for a Traveler from 1800 — entry program (v3, final).
// Writes one original one-sentence explanation (1-200 chars, no trailing
// newline) to entry.txt, deterministically, using only the Node standard
// library.
//
// v3: tightens v2 by 6 characters — "one letter from any man can be read"
// drops the "may send … can read" double verb, and "answer" drops the
// redundant "back". Every word predates 1800; see candidates.md for the
// per-word era check.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Think of it as a post office where one letter from any man can be read at once by all men, and each reader may answer before the ink is dry.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
