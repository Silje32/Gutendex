import { Link } from "react-router-dom";
import styles from "../header/Header.module.css";

export default function HeaderList({ categories }) {
  return (
    <nav className={styles.navbar}>
      {categories.map((category) => (
        <Link
          key={category.name}
          className={styles.categorylink}
          to={category.filepath}
        >
          {category.title}
        </Link>
      ))}
    </nav>
  );
}
