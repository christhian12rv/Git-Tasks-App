import { ApolloServer  } from 'apollo-server';
import { DataSources } from 'apollo-server-core/dist/graphqlOptions';
import config from './config/config';
import logger from './config/logger';
import graphql from './graphql';
import GitHubService from './services/GitHub.service';

const server = new ApolloServer({
	...graphql,
	dataSources: (): DataSources<object> => ({
		gitHubService: new GitHubService(),
	}),
});

server.listen({ port: config.port, }).then(({ url, }) => {
	logger.info(`Servidor rodando em ${url}`);
});