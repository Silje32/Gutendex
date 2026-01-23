export default function BookItem({ data: { books } }) {
  return (
    <li>
      <p className={styles.booklist}>{styles.title}</p>
      <h1>
        {books.title} className={styles.booklist}
      </h1>
      <h2>{books.authors}</h2>
      <img src={books.formats["image/jpeg"]} alt={books.title} />
      <p>{books.summaries}</p>
    </li>
  );
}
