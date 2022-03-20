export interface Tasks{
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}

export enum TaskStatus{
    Done = 'DONE',
    InProgress = 'IN_PROGRESS',
    OPEN = 'OPEN'
}