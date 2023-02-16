import generator from '../../../helpers/generator';
import ContextInterface from '../../../interfaces/Context.interface';
import UserInterface from '../../../interfaces/User.interface';

export default {
	Query: {
		users: async (obj, args, { dataSources, }: ContextInterface): Promise<UserInterface[]> => {
			const users = await dataSources.userService.getAll();

			return users;
		},
		user: async (obj, { login, }, { dataSources, }: ContextInterface): Promise<UserInterface> => {
			const user = await dataSources.gitHubService.getUser(login);

			const userSearched = await dataSources.userService.getByLogin(user.login);

			if (!userSearched) {
				const userCreated = await dataSources.userService.create(user);
				userCreated.token = generator.generateToken(userCreated.id);
	
				return userCreated;
			}

			userSearched.token = generator.generateToken(userSearched.id);

			return userSearched;
		},
	},
	Mutation: {
		createUser: async (obj, { login, }, { dataSources, }: ContextInterface): Promise<UserInterface> => {
			const user = await dataSources.gitHubService.getUser(login);

			const userCreated = await dataSources.userService.create(user);
			userCreated.token = generator.generateToken(userCreated.id);

			return userCreated;
		},
		updateUser: async (obj, { login, data, }, { dataSources, }: ContextInterface): Promise<UserInterface> => {
			const user = await dataSources.userService.updateByLogin(login, data);

			return user;
		},
		deleteUser: async (obj, { login, }, { dataSources, }: ContextInterface): Promise<UserInterface> => {
			const user = await dataSources.userService.deleteByLogin(login);

			return user;
		},
	},
};