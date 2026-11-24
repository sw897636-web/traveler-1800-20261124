# One Sentence for a Traveler from 1800

[![make.fun](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![rank](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/sw897636-web/traveler-1800-20261124/rank.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![reward](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/sw897636-web/traveler-1800-20261124/reward.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)

A [make.fun](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb) entry for
"One Sentence for a Traveler from 1800": one sentence, at most 200
characters, explaining the modern internet to someone who has just stepped
out of the year 1800 — using only words a person from 1800 could know.

## The entry

> Think of it as a post office where one letter from any man can be read at once by all men, and each reader may answer before the ink is dry.

140 characters, one line, no trailing newline.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the sentence
deterministically to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
```

`candidates.md` holds eight original candidate lines, each scored against the
house judge's five criteria, the v1 → v2 → v3 revision log, and a per-word
era check of the final line proving every word predates 1800.
