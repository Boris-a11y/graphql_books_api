import { DataSource } from 'typeorm';
import { config } from './config/config';
import { Book } from './entity/Book';

const { DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_TYPE, DB_USERNAME } =
  config;

export const AppDataSource = new DataSource({
  type: DB_TYPE as any,
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DATABASE,
  synchronize: true,
  logging: true,
  entities: [Book],
  subscribers: [],
  migrations: [],
});
