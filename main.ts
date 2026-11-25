// The One-Line Cat Joke That Lands — one cat joke, written to /output/entry.txt.
// The joke is the whole entry: a single line, under 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I told my cat she was adopted. She didn't even blink, knocked my phone off the table, and went back to sleep like the paperwork was already filed.";

// The gate only accepts 1 to 200 characters of UTF-8 text, so check first.
if (joke.length < 1 || joke.length > 200) {
  throw new Error(`joke must be 1-200 characters, got ${joke.length}`);
}
if (joke.includes("\n")) {
  throw new Error("joke must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke + "\n", "utf8");
console.log(joke);
