import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
//Modulo para leer las variables de entorno
import { ConfigModule } from '@nestjs/config';


@Module({
  imports:[
  // MongooseModule.forRoot('mongodb://localhost/taskdb'),
  //Importacion para variable de entorno
  ConfigModule.forRoot(),
  MongooseModule.forRoot(process.env.DB),
  TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
