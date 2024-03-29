import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //encender cords
  app.setGlobalPrefix('api') //Establecemos este prefijo para todas las rutas
  app.useGlobalPipes(new ValidationPipe());

 
  await app.listen(process.env.PORT);
  console.log("Corriendo en el puerto:"+process.env.PORT)
}
bootstrap();
