// One Sentence for a Traveler from 1800 — entry program (v1).
// Writes one original one-sentence explanation (1-200 chars, no trailing
// newline) to entry.txt, deterministically, using only the Node standard
// library.
//
// v1: a post office where every letter can be read at once by all men, and
// each reader may write back in the same hour.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "It is a post office where every letter any man writes can be read at once by all men, and each reader may write back in the same hour.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
