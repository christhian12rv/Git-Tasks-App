import context from './context';
import dataSources from './dataSources';
import formatError from './formatError';

export default (prisma): any => ({
	formatError,
	dataSources: dataSources(prisma),
	context,
});