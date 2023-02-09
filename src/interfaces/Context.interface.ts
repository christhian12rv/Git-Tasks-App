import GitHubService from '../services/GitHub.service';

type ContextInterface = {
	dataSources: {
		gitHubService: GitHubService
	}
}

export default ContextInterface;