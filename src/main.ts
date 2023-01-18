import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { createYoga } from 'graphql-yoga';
import { createServer } from 'http';
import { config } from './config/config';
import { AppDataSource } from './data-source';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [__dirname + '/**/*.resolver.ts'],
  });

  const yoga = createYoga({ schema });
  const server = createServer(yoga);

  server.listen(config.PORT, () => {
    console.info('Server started');
  });
  AppDataSource.initialize();
}

bootstrap();
