import { main } from "../main.ts";
import {
  assertEquals,
  assert,
} from "https://deno.land/std/testing/asserts.ts";

Deno.test("Returns 'No' if tasks are not evenly dividable", () => {
  const args = ["1", "2", "3"];

  const output = main(args);

  assertEquals(output, "No");
});

Deno.test("Returns 'Yes' and the assignments if it is dividable", () => {
  const args = ["1", "1", "1"];

  const output = main(args);

  assertEquals(output, "Yes\nChild 1: 1\nChild 2: 1\nChild 3: 1");
});

Deno.test("prints out assignments correctly", () => {
  const args = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const output = main(args);
  const expectedOutput = [
    "Yes",
    "Child 1: 9, 6",
    "Child 2: 8, 7",
    "Child 3: 5, 4, 3, 2, 1",
  ].join("\n");

  assertEquals(output, expectedOutput);
});
