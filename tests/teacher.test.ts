import {
  assertThrows,
  assertEquals,
} from "https://deno.land/std/testing/asserts.ts";
import { assignTasks, UndividableError } from "../teacher.ts";

Deno.test("empty list is not assignable", () => {
  assertThrows(() => {
    assignTasks(3, []);
  }, UndividableError);
});

Deno.test("3 children and 3 equal tasks are assignable", () => {
  const assignments = assignTasks(3, [1, 1, 1]);

  assertEquals(assignments, [[1], [1], [1]]);
});
