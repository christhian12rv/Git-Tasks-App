import * as jwt from 'jsonwebtoken';
import config from '../config/config';

export default {
	generateToken(id): string {
		return jwt.sign({ id, }, config.jwtSecret, { expiresIn: '1d', });
	},

	verifyToken(token): any {
		return jwt.verify(token, config.jwtSecret);
	},
};