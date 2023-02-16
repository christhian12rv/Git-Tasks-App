class NotAuthorizedError extends Error {
	constructor(message, ...args: any[]) {
		super(message, ...(args as []));

		this.message = message;
		this.name = 'NotAuthorizedError';
	}
}

export default NotAuthorizedError;