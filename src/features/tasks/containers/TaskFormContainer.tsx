import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import styles from "../styles/taskForm.module.css";
import { Priority, TaskFormData } from "../../../types/task";
import { createTask } from "../hooks/createTask";


export default function TaskFormContainer() {
  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    description: "",
    priority: "medium",
    dueDate: "",
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent< HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "priority" ? (value as Priority) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createTask(formData);
    navigate("/tasks");
  };

  return (
    <div className={styles.container}>
      <h1>新規タスク作成</h1>
      <TaskForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <div className={styles.cancelContainer}>
        <Link to="/tasks" className={styles.cancelLink}>
          前の画面に戻る
        </Link>
      </div>
    </div>
  );
}