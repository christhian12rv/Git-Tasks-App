import { PrismaClient } from '@prisma/client';
import { ApolloServer  } from 'apollo-server';
import apolloServer from './config/apolloServer';
import config from './config/config';
import logger from './config/logger';
import schema from './graphql';

const prisma = new PrismaClient();

const server = new ApolloServer({
	schema,
	...apolloServer(prisma),
});

server.listen({ port: config.port, }).then(({ url, }) => {
	logger.info(`Servidor rodando em ${url}`);
});