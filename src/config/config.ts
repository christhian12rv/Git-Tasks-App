import 'dotenv/config';

export default {
	port: process.env.PORT,
	databaseURL: process.env.DATABASE_URL,
	jwtSecret: process.env.JWT_SECRET,
};