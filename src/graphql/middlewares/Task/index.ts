import logger from '../../../config/logger';
import NotAuthorizedError from '../../../errors/NotAuthorizedError';
import generator from '../../../helpers/generator';
import ContextInterface from '../../../interfaces/Context.interface';

async function authorize(token): Promise<void> {
	try {
		const { id, } = generator.verifyToken(token);
		logger.info(id);
		return id;
	} catch (error) {
		throw new NotAuthorizedError('Usuário não autorizado');
	}
}

export default {
	Query: {
		tasks: async (resolve, obj, args, context: ContextInterface, info): Promise<any> => {
			const { token, dataSources, } = context;

			const userId = await authorize(token);

			return await resolve(obj, args, { ...context, userId: Number(userId), }, info);
		},
		task: async (resolve, obj, args, context: ContextInterface, info): Promise<any> => {
			const { token, dataSources, } = context;

			const userId = await authorize(token);

			return await resolve(obj, args, { ...context, userId: Number(userId), }, info);
		},
	},
	Mutation: {
		createTask: async (resolve, obj, args, context: ContextInterface, info): Promise<any> => {
			const { token, dataSources, } = context;

			const userId = await authorize(token);

			return await resolve(obj, args, { ...context, userId: Number(userId), }, info);
		},
		updateTask: async (resolve, obj, args, context: ContextInterface, info): Promise<any> => {
			const { token, dataSources, } = context;

			const userId = await authorize(token);

			return await resolve(obj, args, { ...context, userId: Number(userId), }, info);
		},
		deleteTask: async (resolve, obj, args, context: ContextInterface, info): Promise<any> => {
			const { token, dataSources, } = context;

			const userId = await authorize(token);

			return await resolve(obj, args, { ...context, userId: Number(userId), }, info);
		},
	},
};