import { Controller, Get, Post, Put, Delete, Body, Param, ConflictException, NotFoundException, HttpCode} from '@nestjs/common';
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
    async findOne(@Param('id') id: string){
        const task = await this.taskService.findOne(id);
        if(!task) throw new NotFoundException('La tarea no fue encontrada')
        return task;
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
    @HttpCode(204)
    async delete(@Param('id') id: string){
        const task = await this.taskService.delete(id);
        if(!task) throw new NotFoundException('Tarea no encontrada');
        return task;
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any){
        const task = await this.taskService.update(id, body);
        if(!task) throw new NotFoundException('Task not found');
        return task;
    }
}
