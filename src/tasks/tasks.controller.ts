import { Controller, Get, Post,Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Tasks } from './tasks.model';

@Controller('tasks')
export class TasksController {

    constructor(private taskService:  TasksService) {}

    @Get()
    getAllTasks ():Tasks[] {
            return this.taskService.getAllTasks();
    }

    @Get('find_task/:id')
    getTaskById (@Param('id') id:string):Tasks{
            return this.taskService.getTaskById(id);
    }

    @Post('create_task')
    createTask(@Body('title') title : string,@Body('description') description: string): Tasks {
        return this.taskService.createTask(title,description);
    }

    @Post('delete_task/:id')
    deleteTask(@Param('id') id:string):boolean{
        return this.taskService.deleteTask(id);
    }


}

