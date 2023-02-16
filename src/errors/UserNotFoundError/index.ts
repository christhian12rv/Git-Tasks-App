class UserNotFoundError extends Error {
	constructor(message, ...args: any[]) {
		super(message, ...(args as []));

		this.message = message;
		this.name = 'UserNotFoundError';
	}
}

export default UserNotFoundError;