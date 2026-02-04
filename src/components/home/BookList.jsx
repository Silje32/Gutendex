import BookItem from "./BookItem.jsx";
import styles from "./BookList.module.css";

export default function BookList({ books }) {
  if (!books) return <p>Loading books...</p>;

  return (
    <ul>
      {books.map((book) => {
        return <BookItem className={styles.booklist} key={book.id} {...book} />;
      })}
    </ul>
  );
}
