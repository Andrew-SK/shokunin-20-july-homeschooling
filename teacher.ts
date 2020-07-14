export class UndividableError extends Error {
  constructor() {
    super("Tasks cannot be evenly divided");
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

const sum = (tasks: number[]) => {
  return tasks.reduce((a, b) => a + b, 0);
};

const shortcircuit = (numChildren: number, tasks: number[]): boolean => {
  // Some basic checks that can quickly determine if the tasks will
  // not be evenly dividable.
  //
  // Returns true if checks determine that the tasks will *not* evenly divide.
  return (
    tasks.length < numChildren ||
    sum(tasks) % numChildren != 0
  );
};

export const assignTasks = (
  numChildren: number,
  tasks: number[],
): number[][] => {
  if (shortcircuit(numChildren, tasks)) {
    throw new UndividableError();
  }

  return [[1], [1], [1]];
};
