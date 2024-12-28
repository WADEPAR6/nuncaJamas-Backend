/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });
  await app.listen(process.env.PORT ?? 3000);

  app.use(express.json({ limit: '250mb' }));
  app.use(express.urlencoded({ limit: '250mb', extended: true }));
}
bootstrap();
