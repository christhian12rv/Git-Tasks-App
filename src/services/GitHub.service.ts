import { RESTDataSource } from 'apollo-datasource-rest';
import UserInterface from '../interfaces/User.interface';

class GitHubService extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://api.github.com';
	}

	public async getUser(login): Promise<UserInterface> {
		const user = await this.get(`/users/${login}`);

		return user;
	}
}

export default GitHubService;