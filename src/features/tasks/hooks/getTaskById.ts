import { Task } from "../../../types/task";
import { mockTasks } from "../mocks/task";

export const getTaskById = (id?: string): Promise<Task | undefined> => {
  if(!id) return Promise.resolve(undefined);
  return new Promise((resolve) => {
    setTimeout(() => {
      const task = mockTasks.find((task) => task.id === Number.parseInt(id));
      resolve(task);
    }, 500);
  });
};
