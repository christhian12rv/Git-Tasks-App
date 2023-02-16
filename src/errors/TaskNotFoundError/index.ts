class TaskNotFoundError extends Error {
	constructor(message, ...args: any[]) {
		super(message, ...(args as []));

		this.message = message;
		this.name = 'TaskNotFoundError';
	}
}

export default TaskNotFoundError;