import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { dbConfig } from './src/database.config';

export default new DataSource({
  type: dbConfig.type,
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  synchronize: dbConfig.synchronize,
  dropSchema: false,
  logging: false,
  entities: dbConfig.entities,
  migrations: dbConfig.migrations,
  migrationsTableName: 'migrations',
  namingStrategy: new SnakeNamingStrategy(),
});
