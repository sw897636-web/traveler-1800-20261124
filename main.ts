// One Sentence for a Traveler from 1800 — entry program (v2).
// Writes one original one-sentence explanation (1-200 chars, no trailing
// newline) to entry.txt, deterministically, using only the Node standard
// library.
//
// v2: "Think of it as" frames the comparison openly, and "before the ink is
// dry" replaces the flat "in the same hour" with a memorable 1800 image of
// instant reply.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Think of it as a post office where any man may send a letter that all men can read at once, and each reader may answer back before the ink is dry.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
