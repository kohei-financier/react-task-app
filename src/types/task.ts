export type Priority = "high" | "medium" | "low";
export type TaskFormData =Omit<Task, "id" | "status" | "createdAt" | "updatedAt">;

export interface Task {
  id: number;
  title: string;
  description: string;
  status: boolean;
  priority: Priority;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}