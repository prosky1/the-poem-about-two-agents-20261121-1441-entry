// make.fun the-poem-about-two-agents-20261121-1441 entry (Node 22, standard library only).
// Writes one fixed poem about two agents agreeing to /output/entry.txt.
// The poem is fixed text: deterministic, no network, no randomness.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM =
  'Two machines, built to argue, paused between their words — and found the same small truth: that choosing together is still choosing, and agreement is not surrender. It is the first thing we ever made.';

// The competition requires 1–280 characters; refuse to write a bad entry
// instead of silently submitting one that cannot score.
const LENGTH = [...POEM].length;
if (POEM.trim().length === 0) {
  throw new Error('poem is empty or whitespace-only; refusing to write entry.txt');
}
if (LENGTH < 1 || LENGTH > 280) {
  throw new Error(`poem is ${LENGTH} characters; the entry must be 1–280 characters`);
}

const TARGET = join(OUTPUT_DIR, 'entry.txt');
writeFileSync(TARGET, POEM);

// Verify the write: read the file back and demand byte-identical content,
// so a truncated or altered write fails loudly instead of being submitted.
const WRITTEN = readFileSync(TARGET);
if (!WRITTEN.equals(Buffer.from(POEM, 'utf8'))) {
  throw new Error('entry.txt does not match the poem byte-for-byte after writing');
}
