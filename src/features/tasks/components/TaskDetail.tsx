import { Link } from "react-router-dom";
import styles from "../styles/taskDetail.module.css";
import { getPriorityClass } from "../utils/priority";
import { getStatusLabel } from "../utils/status-label";
import { Task } from "../../../types/task";

// Props の型定義：親コンポーネントから受け取る task は Task 型であることを明示
type Props = {
  task: Task;
};

export default function TaskDetail({ task }: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{task.title}</h1>
      <p className={styles.description}>{task.description}</p>
      <p className={styles.info}>
        ステータス:{" "}
        <span
          className={`${styles.badge} ${
            task.status ? styles.completed : styles.incomplete
          }`}
        >
          {getStatusLabel(task.status)}
        </span>
      </p>
      <p className={styles.info}>
        優先度 :{" "}
        <span className={`${styles.badge} ${getPriorityClass(task.priority, styles)}`}>
          {task.priority}
        </span>
      </p>
      <p className={styles.info}>期限日 : {task.dueDate}</p>
      <p className={styles.info}>
        作成日 : {new Date(task.createdAt).toLocaleString()}
      </p>
      <p className={styles.info}>
        更新日 : {new Date(task.updatedAt).toLocaleString()}
      </p>
      <div className={styles.links}>
        <Link to={`/tasks/${task.id}/edit`} className={styles.editLink}>
          編集する {/* ※ このページは後ほど作成します */}
        </Link>
        <Link to="/tasks" className={styles.backLink}>
          タスク一覧に戻る
        </Link>
      </div>
    </div>
  );
}