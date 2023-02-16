import { GraphQLFormattedError } from 'graphql';

export default (err): GraphQLFormattedError => new Error(err.message);