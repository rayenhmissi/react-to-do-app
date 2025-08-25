import styles from "../styles/list.module.css";

export default function TaskList({ tasklist, handleComplete, handleDelete }) {
  const sortedTasklist = tasklist
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <ul>
      {sortedTasklist.map((item) => (
        <li className={styles.list} key={item.name}>
          <span
            className={item.done ? styles.completed : ""}
            onClick={() => handleComplete(item)}
          >
            {item.name}{" "}{item.date}{" "}{item.time}
          </span>
          <span>
            <button className="delete_btn" onClick={() => handleDelete(item)}>
              X
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
}