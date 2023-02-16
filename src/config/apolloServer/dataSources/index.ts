import GitHubService from '../../../services/GitHub.service';
import TaskService from '../../../services/Task.service';
import UserService from '../../../services/User.service';

export default (prisma) => (): any => ({
	gitHubService: new GitHubService(),
	userService: new UserService(prisma),
	taskService: new TaskService(prisma),
});