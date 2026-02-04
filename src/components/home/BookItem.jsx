import styles from "./BookList.module.css";

export default function BookItem({ title, authors, formats, summaries }) {
  return (
    <li>
      <p className={styles.booklist}>{title}</p>
      <h1>{title}</h1>
      {authors.map((author) => (
        <h2>{author.name}</h2>
      ))}
      <img src={formats["image/jpeg"]} alt={title} />
      <p>{summaries}</p>
    </li>
  );
}
