import { assertThrows } from "https://deno.land/std/testing/asserts.ts";
import { assignTasks, UndividableError } from "../teacher.ts";

Deno.test("empty list is not assignable", () => {
  assertThrows(() => {
    assignTasks(3, []);
  }, UndividableError);
});
