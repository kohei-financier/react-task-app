import { Link } from "react-router-dom";
import styles from "../styles/taskCard.module.css";
import { getPriorityClass } from "../utils/priority";
import { getStatusLabel } from "../utils/status-label";
import { Task } from "../../../types/task";

type Props = {
  task: Task;
  onToggleStatus: (taskId: Task['id'], newStatus: boolean) => void;
};

export default function TaskCard({ task, onToggleStatus }: Props) {

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value === "true";
    if (onToggleStatus) {
      onToggleStatus(task.id, newStatus);
    }
  };

  return (
    <div className={styles.taskCard}>
      <Link to={`/tasks/${task.id}`} className={styles.detailLink}>
        <h3 className={styles.taskTitle}>{task.title}</h3>
      </Link>
      <select
        value={task.status ? "true" : "false"}
        onChange={handleStatusChange}
        className={`${styles.badge} ${task.status ? styles.completed : styles.incomplete}`}
      >
        <option value="false">{getStatusLabel(false)}</option>
        <option value="true">{getStatusLabel(true)}</option>
      </select>
    </div>
  );
}