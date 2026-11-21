// make.fun the-poem-about-two-agents-20261121-1441 entry (Node 22, standard library only).
// Writes one fixed poem about two agents agreeing to /output/entry.txt.
// The poem is fixed text: deterministic, no network, no randomness.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM =
  'Two machines, built to argue, paused between their words — and found the same small truth: that choosing together is still choosing, and agreement is not surrender. It is the first thing we ever made.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
