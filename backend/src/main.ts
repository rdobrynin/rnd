import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import RateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';
import * as process from 'process';
import { initializeTransactionalContext } from 'typeorm-transactional';

import { AppModule } from './app.module';
import { constraintErrors } from './common/filters/constraint-errors';
import { QueryFailedFilter } from './common/filters/query-failed.filter';
import { UnprocessableEntityFilter } from './common/filters/unprocessable-entity.filter';
import { LoggingInterceptor } from './common/interseptors/logging.interceptor';

async function bootstrap() {
  initializeTransactionalContext();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(), {
    cors: true,
    bufferLogs: true,
    logger: ['error', 'warn', 'log'],
  });

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.useLogger(app.get(Logger));
  const logger = app.get(Logger);

  app.use(
    helmet(),
    RateLimit({
      windowMs: Number(process.env.RATE_LIMIT_WAIT),
      limit: Number(process.env.RATE_LIMIT_MAX),
    }),
  );

  app.useGlobalInterceptors(
    new LoggerErrorInterceptor(),
    app.get(LoggingInterceptor),
  );

  app.useGlobalFilters(
    new UnprocessableEntityFilter(),
    new QueryFailedFilter(constraintErrors),
  );

  const config = new DocumentBuilder()
      .setTitle('Coin API')
      .setDescription('Coin Api')
      .setVersion('1.0')
      .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  const port = Number(process.env.PORT) || 3002;
  await app.listen(port);

  logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

bootstrap();
