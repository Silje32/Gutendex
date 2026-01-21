export default function BookItem({ data: { books } }) {
  return (
    <li>
      <p className={styles.booklist}>{books.name}</p>
    </li>
  );
}
