import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from 'src/schemas/task.shema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Task.name,
        schema: TaskSchema,
      },
    ]),
    TasksModule,
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
