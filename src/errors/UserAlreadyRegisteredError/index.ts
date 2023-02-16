class UserAlreadyRegisteredError extends Error {
	constructor(message, ...args: any[]) {
		super(message, ...(args as []));

		this.message = message;
		this.name = 'UserAlreadyRegisteredError';
	}
}

export default UserAlreadyRegisteredError;