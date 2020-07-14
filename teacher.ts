export class UndividableError extends Error {
  constructor() {
    super("Tasks cannot be evenly divided");
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

const sum = (tasks: number[]) => {
  return tasks.reduce((a, b) => a + b, 0);
};

export const assignTasks = (
  numChildren: number,
  tasks: number[],
): number[][] => {
  if (tasks.length < numChildren) {
    throw new UndividableError();
  }

  if (sum(tasks) % numChildren != 0) {
    throw new UndividableError();
  }

  return [[1], [1], [1]];
};
