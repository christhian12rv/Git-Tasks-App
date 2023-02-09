import UserInterface from './User.interface';

interface TaskInterface {
	id: number
	title: string
	description: string
	user?: UserInterface
	userId?: number
}

export default TaskInterface;