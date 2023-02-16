

import { join } from 'path';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import { applyMiddleware } from 'graphql-middleware';
import { makeExecutableSchema } from 'graphql-tools';

const allTypes = loadFilesSync(join(__dirname, 'modules', '**', '*.gql'));
const allResolvers = loadFilesSync(join(__dirname, 'modules', '**', 'resolvers.ts'));
const allMiddlewares = loadFilesSync(join(__dirname, 'middlewares', '**', '*.ts'));

const typeDefs = mergeTypeDefs(allTypes);
const resolvers = mergeResolvers(allResolvers);

const schema = applyMiddleware(makeExecutableSchema({ typeDefs, resolvers, }), ...allMiddlewares);

export default schema;