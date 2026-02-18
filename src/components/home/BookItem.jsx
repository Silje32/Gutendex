import FavoritesButton from "../buttons/Favoritesbutton";
import styles from "./BookList.module.css";

export default function BookItem({ id, title, authors, formats, summaries }) {
  return (
    <>
      <div className={styles.container_home}>
        <li className={styles.booklist} key={id}>
          <h1>Title: {title}</h1>
          {authors.map((author) => (
            <h2>Author: {author.name}</h2>
          ))}
          <img
            src={formats["image/jpeg"]}
            alt={title}
            className={styles.images}
          />
          <p>
            <strong>Summary:</strong> {summaries}
          </p>
        </li>
        <FavoritesButton />
        <div className={styles.hr}></div>
      </div>
    </>
  );
}
