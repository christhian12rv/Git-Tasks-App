import UserAlreadyRegisteredError from '../../../errors/UserAlreadyRegisteredError';
import generator from '../../../helpers/generator';
import ContextInterface from '../../../interfaces/Context.interface';
import UserInterface from '../../../interfaces/User.interface';

export default {
	Mutation: {
		createUser: async (resolve, obj, args, context: ContextInterface, info): Promise<any> => {
			const { login, } = args;
			const { dataSources, } = context;

			const userSearched = await dataSources.userService.getByLogin(login);

			if (userSearched)
				throw new UserAlreadyRegisteredError(`Usuário com login ${login} já registrado`);

			return await resolve(obj, args, context, info);
		},
	},
};