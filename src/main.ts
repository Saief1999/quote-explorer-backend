import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  const corsOptions = {
    origin: [process.env.FRONTORIGIN],
    optionsSuccessStatus: 200
  };
  
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptions);
    // Whitelist -> Transform payload incoming
    // Transform -> Tranform payload outgoing
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

  await app.listen(3001);
}
bootstrap();
