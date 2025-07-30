import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for frontend connection
  app.enableCors({
    origin: 'http://localhost:3000', // Frontend URL
    credentials: true,
  });

  await app.listen(3001);
}
bootstrap();
