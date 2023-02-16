import { RESTDataSource } from 'apollo-datasource-rest';
import UserNotFoundError from '../errors/UserNotFoundError';
import UserInterface from '../interfaces/User.interface';

class GitHubService extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://api.github.com';
	}

	public async getUser(login): Promise<UserInterface> {
		try {
			const user = await this.get(`/users/${login}`);

			return user;
		} catch (error) {
			if (error.extensions.response.status === 404)
				throw new UserNotFoundError(`Usuário ${login} não encontrado`);

			throw new Error(error);
		}
	}
}

export default GitHubService;