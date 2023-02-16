import GitHubService from '../services/GitHub.service';
import TaskService from '../services/Task.service';
import UserService from '../services/User.service';

interface DataSourcesInterface {
	gitHubService: GitHubService
	userService: UserService
	taskService: TaskService
}

export default DataSourcesInterface;