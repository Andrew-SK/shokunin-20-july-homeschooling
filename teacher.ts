type result = {
    evenlyDividable: boolean;
    assignments: number[][];
}

export const assignTasks = (numChildren: number, tasks: number[]): result => {
    return {
        evenlyDividable: false,
        assignments: [],
    };
};
