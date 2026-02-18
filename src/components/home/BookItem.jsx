import FavoritesButton from "../buttons/Favoritesbutton";
import styles from "./BookList.module.css";

export default function BookItem({ title, authors, formats, summaries }) {
  return (
    <>
      <div className={styles.container_home}>
        <li className={styles.booklist}>
          <h1 className={styles.h1}>{title}</h1>
          {authors.map((author) => (
            <h2>{author.name}</h2>
          ))}
          <img
            src={formats["image/jpeg"]}
            alt={title}
            className={styles.images}
          />
          <p>{summaries}</p>
        </li>
        <FavoritesButton />
      </div>
    </>
  );
}
