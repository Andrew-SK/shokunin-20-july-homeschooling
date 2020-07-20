import { assignTasks, UndividableError } from "./teacher.ts";

const NUMBER_OF_CHILDREN = 3;

const stringifyAssignments = (assignments: number[][]) => {
  const lines = assignments.map((tasks: number[], childIndex: number) => {
    return `Child ${childIndex + 1}: ${tasks.join(", ")}`;
  });

  return ["Yes", ...lines].join("\n");
};

export const main = (args: string[]) => {
  const tasks = args.map((arg) => parseInt(arg));

  try {
    const assignments = assignTasks(NUMBER_OF_CHILDREN, tasks);
    return stringifyAssignments(assignments);
  } catch (e) {
    if (e instanceof UndividableError) {
      return "No";
    } else {
      throw e;
    }
  }
};
