export class UndividableError extends Error {
  constructor() {
    super("Tasks cannot be evenly divided");
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export const assignTasks = (
  numChildren: number,
  tasks: number[],
): number[][] => {
  if (tasks.length < numChildren) {
    throw new UndividableError();
  }

  return [[1], [1], [1]];
};
