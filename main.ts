import { mkdirSync, writeFileSync } from "node:fs";

// The Meeting That Should Have Been One Line
// One sentence, 95 characters: the line that kills the meeting by
// trapping it in its own loop — the email would have needed a meeting too.
const line =
  "This meeting could have been an email, but the email would have needed a meeting to explain it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
