import { PrismaClient } from '@prisma/client';
import TaskNotFoundError from '../errors/TaskNotFoundError';
import TaskInterface from '../interfaces/Task.interface';

class TaskService {
	private prisma: PrismaClient;

	constructor(prisma: PrismaClient) {
		this.prisma = prisma;
	}

	public async getAllByUserId(userId): Promise<TaskInterface[]> {
		const tasks = await this.prisma.task.findMany({
			where: {
				userId,
			},
			include: {
				user: true,
			},
		});

		return tasks;
	}

	public async getByIdAndUserId(id, userId): Promise<TaskInterface> {
		const task = await this.prisma.task.findFirst({
			where: {
				id,
				userId,
			},
			include: {
				user: true,
			},
		});
		
		return task;
	}

	public async create(task: TaskInterface): Promise<TaskInterface> {
		const taskCreated = await this.prisma.task.create({
			data: {
				title: task.title,
				description: task.description,
				userId: task.userId,
			},
			include: {
				user: true,
			},
		});

		return taskCreated;
	}

	public async updateByIdAndUserId(id, userId, task: TaskInterface): Promise<TaskInterface> {
		const taskSearched = await this.getByIdAndUserId(id, userId);

		if (!taskSearched)
			throw new TaskNotFoundError(`Não existe uma task com id ${id} pertencente ao usuário com id ${userId}`);

		if (taskSearched) {
			const taskUpdated = await this.prisma.task.update({
				data: {
					title: task.title,
					description: task.description,
					userId: task.userId,
				},
				where: {
					id,
				},
			});

			return taskUpdated;
		}

		return taskSearched;
	}

	public async deleteByIdAndUserId(id, userId): Promise<TaskInterface> {
		const taskSearched = await this.getByIdAndUserId(id, userId);

		if (!taskSearched)
			throw new TaskNotFoundError(`Não existe uma task com id ${id} pertencente ao usuário com id ${userId}`);

		if (taskSearched) {
			const taskDeleted = await this.prisma.task.delete({
				where: {
					id,
				},
			});

			return taskDeleted;
		}

		return taskSearched;
	}

}

export default TaskService;