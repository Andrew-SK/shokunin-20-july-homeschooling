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

  let mutableTasks = [...tasks];

  // Sort descending.
  mutableTasks.sort((a, b) => b - a);

  const perChildTarget = sum(tasks) / numChildren;

  // Build an array of empty lists
  let assignments: number[][] = new Array(numChildren)
    .fill(null)
    .map((_) => []);

  assignments.forEach((assignment) => {
    let index = 0;

    while (sum(assignment) < perChildTarget && index < mutableTasks.length) {
      const nextTask = mutableTasks[index];

      if (sum([...assignment, nextTask]) <= perChildTarget) {
        // assign task to the current child.
        assignment.push(nextTask);
        mutableTasks.splice(index, 1);
      } else {
        // otherwise we move down the list.
        index++;
      }
    }

    if (sum(assignment) !== perChildTarget) {
      throw new UndividableError();
    }
  });

  return assignments;
};
