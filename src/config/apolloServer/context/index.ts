import ApolloContextInterface from '../../../interfaces/ApolloContext.interface';

export default ({ req, }): ApolloContextInterface => {
	const token = req.headers.authorization;

	return {
		token,
	};
};