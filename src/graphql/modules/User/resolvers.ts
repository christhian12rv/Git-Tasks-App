import ContextInterface from '../../../interfaces/Context.interface';
import UserInterface from '../../../interfaces/User.interface';

export default {
	Query: {
		user: async (obj, { login, }, { dataSources, }: ContextInterface): Promise<UserInterface> => {
			const user = await dataSources.gitHubService.getUser(login);
			return user;
		},
	},
};