import { Injectable } from '@nestjs/common';
import { Tasks,TaskStatus } from './tasks.model';

@Injectable()
export class TasksService {

    private tasks :Tasks[]= [];
    getAllTasks ():Tasks[]  {   
        return this.tasks; 
    }

    getTaskById(id: string): Tasks {
        return this.tasks.find(task => task.id === id);
    }

    createTask(title: string, description: string): Tasks {
        const task: Tasks = {
            id: Math.random().toString(),
            title,
            description,
            status: TaskStatus.OPEN,
        };
        this.tasks.push(task);
        return task;
     
    }

    deleteTask(id: string): boolean {
        const task = this.getTaskById(id);
        if(task){
            const index = this.tasks.indexOf(task);
            this.tasks.splice(index,1);
            return true;
        }
        return false;
    }
}
