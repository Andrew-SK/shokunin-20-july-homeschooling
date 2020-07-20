import {
  assertThrows,
  assertEquals,
} from "https://deno.land/std/testing/asserts.ts";

import { assignTasks, UndividableError } from "../teacher.ts";

Deno.test("Empty list is not assignable", () => {
  assertThrows(() => {
    assignTasks(3, []);
  }, UndividableError);
});

Deno.test("3 children and 3 equal tasks are assignable", () => {
  const assignments = assignTasks(3, [1, 1, 1]);

  assertEquals(assignments, [[1], [1], [1]]);
});

Deno.test("it's not assignable if the sum of the tasks is not divisible by no. of children", () => {
  assertThrows(() => {
    assignTasks(3, [3, 1, 1]);
  }, UndividableError);
});

Deno.test("Not assignable if the no. tasks < no. of children", () => {
  assertThrows(() => {
    assignTasks(3, [1, 8]);
  }, UndividableError);
});

Deno.test("3 children, 6 tasks divided evenly", () => {
  const assignments = assignTasks(3, [1, 1, 1, 1, 1, 1]);

  assertEquals(assignments, [[1, 1], [1, 1], [1, 1]]);
});

Deno.test("3 children, 5 unequal tasks", () => {
  const assignments = assignTasks(3, [2, 1, 1, 1, 1]);

  assertEquals(assignments, [[2], [1, 1], [1, 1]]);
});

Deno.test("3 children, all unequal tasks", () => {
  const assignments = assignTasks(3, [9, 8, 7, 6, 5, 4, 3, 2, 1]);

  assertEquals(assignments, [[9, 6], [8, 7], [5, 4, 3, 2, 1]]);
});

Deno.test("unordered input", () => {
  const assignments = assignTasks(3, [1, 2, 1, 1, 1]);

  assertEquals(assignments, [[2], [1, 1], [1, 1]]);
});

Deno.test("2 children", () => {
  const assignments = assignTasks(2, [1, 1]);

  assertEquals(assignments, [[1], [1]]);
});

Deno.test("3 children and 1, 2, 3 are not dividable", () => {
  assertThrows(() => {
    assignTasks(3, [1, 2, 3]);
  }, UndividableError);
});
