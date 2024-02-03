import { Controller, Get, Post, Put, Delete, Body, Param, ConflictException } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService ){
        this.taskService
    }

    @Get()
    findAll(){
        return this.taskService.findAll();
    }


    @Get(':id')
    findOne(@Param('id') id: string){
        return this.taskService.findOne(id);
    }


    @Post()
    async create(@Body() body: CreateTaskDto){
        try {
            return await this.taskService.create(body);
        } catch (error) {
            if(error.code === 11000){
                throw new ConflictException('La tarea ya existe')
            }else{
                throw error;
            }
        }
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.taskService.delete(id)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body: any){
        return this.taskService.update(id, body)
    }
}
