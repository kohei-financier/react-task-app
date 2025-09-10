import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { getTaskById } from "../hooks/getTaskById";
import { updateTask } from "../hooks/updateTask";
import styles from "../styles/taskForm.module.css";
import { Priority, TaskFormData } from "../../../types/task";



export default function TaskEditContainer() {
  const { id } = useParams<{ id?: string }>();
  const [formData, setFromData] = useState<TaskFormData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchTask() {
      const task = await getTaskById(id);
      if (task) {
        setFromData({
          title: task.title,
          description: task.description,
          priority: task.priority,
          dueDate: task.dueDate,
        });
      }
    }
    fetchTask();
  }, [id]);

  if (!formData) {
    return (
      <div style={{display: "flex", justifyContent: "center", marginTop: "300px" }}>
        読み込み中...
      </div>
    );
  }

  const handleChange = (
    e: React.ChangeEvent< HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement >
  ) => {
    const { name, value } = e.target;
    setFromData((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        [name]: name === "priority" ? (value as Priority) : value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!id) return;
    e.preventDefault();
    await updateTask(id, formData);
    navigate(`/tasks/${id}`);
  };

  return (
    <div className={styles.container}>
      <h1>タスク編集</h1>
      <TaskForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} id={id} />
      <div className={styles.cancelContainer}>
        <Link to={`/tasks/${id}`} className={styles.cancelLink}>
          前の画面に戻る
        </Link>
      </div>
    </div>
  );
}
