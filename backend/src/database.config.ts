import * as dotenv from 'dotenv';
import type { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

dotenv.config({ path: '.env' });

export const dbConfig: MysqlConnectionOptions = {
  type: 'mariadb',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_ROOT_USER,
  password: process.env.DB_ROOT_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/**/modules/**/*.entity.js'],
  migrations: ['dist/**/migrations/*.js'],
  synchronize: false,
  logging: true,
  namingStrategy: new SnakeNamingStrategy(),
};
