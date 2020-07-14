import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { assignTasks } from "../teacher.ts";

Deno.test("assignTasks", () => {
    Deno.test("empty list is not assignable", () => {
        const result = assignTasks(3, []);

        assertEquals(result.evenlyDividable, false);
    });
});
