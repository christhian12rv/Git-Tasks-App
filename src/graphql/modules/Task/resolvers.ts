import ContextInterface from '../../../interfaces/Context.interface';
import TaskInterface from '../../../interfaces/Task.interface';

export default {
	Query: {
		tasks: async (obj, args, context: ContextInterface): Promise<TaskInterface[]> => {
			const { dataSources, userId, } = context;

			const tasks = await dataSources.taskService.getAllByUserId(Number(userId));

			return tasks;
		},
		task: async (obj, { id, }, context: ContextInterface): Promise<TaskInterface> => {
			const { dataSources, userId, } = context;

			const task = await dataSources.taskService.getByIdAndUserId(id, Number(userId));

			return task;
		},
	},
	Mutation: {
		createTask: async (obj, { data, }, context: ContextInterface): Promise<TaskInterface> => {
			const { dataSources, userId, } = context;

			data.userId = Number(userId);
			const task = await dataSources.taskService.create(data);

			return task;
		},
		updateTask: async (obj, { id, data, }, context: ContextInterface): Promise<TaskInterface> => {
			const { dataSources, userId, } = context;

			const task = await dataSources.taskService.updateByIdAndUserId(id, Number(userId), data);

			return task;
		},
		deleteTask: async (obj, { id, }, context: ContextInterface): Promise<TaskInterface> => {
			const { dataSources, userId, } = context;

			const task = await dataSources.taskService.deleteByIdAndUserId(id, Number(userId));

			return task;
		},
	},
};