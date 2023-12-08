import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

import * as dotenv from 'dotenv';
import * as cors from 'cors';
import helmet from 'helmet';

dotenv.config({ path: __dirname + '/../../src/secrets/keys/.env' });

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(
    cors({
      origin: [
        'http://localhost:3865',
        'http://localhost:3870',
        'http://localhost:3880',
        'https://openricecanadafrontend.vercel.app',
        'https://ttiimmothy.github.io/openrice-timothy-frontend',
        'https://ttiimmothy.github.io',
      ],
      credentials: true,
    }),
  );
  app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle('Openrice Canada')
    .setDescription('The Openrice Canada API description')
    .setVersion('0.1.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/swagger', app, document, {
    customSiteTitle: 'Swagger API Documentation',
    customfavIcon: '/static/recent_favicon.ico',
  });

  await app.listen(process.env.PORT);
}
bootstrap();
