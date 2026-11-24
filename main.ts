// This entry writes the answer for "The Dog Ate My Homework: Funniest Excuse"
// to the output directory as entry.txt. It resolves the destination directory
// from MAKEFUN_OUTPUT_DIR (falling back to /output), ensures it exists, and
// emits the single-line excuse verbatim.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "The dog ate my homework, then filed a two-star review: Dry, chewy, and suspiciously short on citations.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
