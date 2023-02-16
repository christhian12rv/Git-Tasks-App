import TaskInterface from './Task.interface';

interface UserInterface {
	id: number
	login: string
	avatar_url: string
	tasks?: TaskInterface[]
	token?: string
}

export default UserInterface;