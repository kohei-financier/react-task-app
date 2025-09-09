import { TaskFormData } from "../../../types/task";
import styles from "../styles/taskForm.module.css";

type Props = {
  formData: TaskFormData;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement >
  ) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function TaskForm({ formData, onChange, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label>タスク名：</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={onChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>説明：</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={onChange}
          required
          />
      </div>
      <div className={styles.formGroup}>
        <label>優先度：</label>
        <select name="priority" value={formData.priority} onChange={onChange}>
          <option value="high">高</option>
          <option value="medium">中</option>
          <option value="low">低</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label>期限日：</label>
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={onChange}
          required
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        作成する
      </button>
    </form>
  );
}