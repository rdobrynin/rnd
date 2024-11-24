/* eslint-disable @typescript-eslint/require-await */
import './common/boilerplate.polyfill';

import { CacheModule } from '@nestjs/cache-manager';
import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-redis-store';
import { LoggerModule } from 'nestjs-pino';
import { DataSource } from 'typeorm';
import { addTransactionalDataSource } from 'typeorm-transactional';

import { LoggingInterceptor } from './common/interseptors/logging.interceptor';
import { dbConfig } from './database.config';
import {HealthCheckerModule} from "./modules/health-checker/health-checker.module";

@Module({
  imports: [
    CacheModule.registerAsync({
      useClass: undefined,
      useExisting: undefined,
      isGlobal: true,
      useFactory: (configService: ConfigService) => ({
        store: redisStore,
        port: configService.get<number>('REDIS_PORT'),
        host: configService.get<string>('REDIS_HOST'),
        ttl: configService.get<number>('REDIS_TTL'),
      }),
      inject: [ConfigService],
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        customProps: () => ({
          context: 'HTTP',
        }),
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
          },
        },
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      useFactory() {
        return {
          type: dbConfig.type,
          host: dbConfig.host,
          port: dbConfig.port,
          username: dbConfig.username,
          password: dbConfig.password,
          database: dbConfig.database,
          entities: dbConfig.entities,
          migrations: dbConfig.migrations,
          synchronize: dbConfig.synchronize,
          keepConnectionAlive: false,
          autoLoadEntities: false,
          migrationsRun: false,
          namingStrategy: dbConfig.namingStrategy,
        };
      },
      async dataSourceFactory(options) {
        if (!options) {
          throw new Error('Invalid options passed');
        }

        return addTransactionalDataSource(new DataSource(options));
      },
    }),
    HealthCheckerModule,
  ],
  providers: [
    LoggingInterceptor,
    { provide: APP_PIPE, useValue: new ValidationPipe({ whitelist: true }) },
  ],
  exports: [],
})
export class AppModule {}
