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
  throw new UndividableError();
};
