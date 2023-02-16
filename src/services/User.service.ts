import { PrismaClient } from '@prisma/client';
import UserInterface from '../interfaces/User.interface';

class UserService {
	private prisma: PrismaClient;

	constructor(prisma: PrismaClient) {
		this.prisma = prisma;
	}

	public async getAll(): Promise<UserInterface[]> {
		const users = await this.prisma.user.findMany({
			include: {
				tasks: true,
			},
		});

		return users;
	}

	public async getById(id): Promise<UserInterface> {
		const user = await this.prisma.user.findUnique({
			where: {
				id,
			},
			include: {
				tasks: true,
			},
		});

		return user;
	}

	public async getByLogin(login): Promise<UserInterface> {
		const user = await this.prisma.user.findUnique({
			where: {
				login,
			},
			include: {
				tasks: true,
			},
		});

		return user;
	}

	public async create(user: UserInterface): Promise<UserInterface> {
		const userCreated = await this.prisma.user.create({
			data: {
				login: user.login,
				avatar_url: user.avatar_url,
			},
			include: {
				tasks: true,
			},
		});

		return userCreated;
	}

	public async updateByLogin(login, user: UserInterface): Promise<UserInterface> {
		const userSearched = await this.getByLogin(login);

		if (userSearched) {
			const userUpdated = await this.prisma.user.update({
				data: {
					login: user.login,
					avatar_url: user.avatar_url,
				},
				where: {
					login,
				},
				include: {
					tasks: true,
				},
			});

			return userUpdated;
		}

		return userSearched;
	}

	public async deleteByLogin(login): Promise<UserInterface> {
		const userSearched = await await this.getByLogin(login);

		if (userSearched) {
			const userDeleted = await this.prisma.user.delete({
				where: {
					login,
				},
				include: {
					tasks: true,
				},
			});

			return userDeleted;
		}

		return userSearched;
	}

}

export default UserService;