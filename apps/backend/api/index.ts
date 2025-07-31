import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import type { VercelRequest, VercelResponse } from '@vercel/node';

let app: any;

async function bootstrap() {
  if (!app) {
    app = await NestFactory.create(AppModule);

    // Get CORS origins from environment variable
    const corsOrigins = process.env.CORS_ORIGINS
      ? process.env.CORS_ORIGINS.split(',').map((origin) => origin.trim())
      : ['http://localhost:3000', 'https://your-frontend-domain.vercel.app'];

    // Enable CORS for frontend connection
    app.enableCors({
      origin: corsOrigins,
      credentials: true,
    });

    await app.init();
  }
  return app;
}

export default async (req: VercelRequest, res: VercelResponse) => {
  const server = await bootstrap();
  const handler = server.getHttpAdapter().getInstance();
  return handler(req, res);
};
