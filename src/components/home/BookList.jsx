import BookItem from "./BookItem.jsx";

export default function BookList({ data: { books } }) {
  return (
    <ul>
      {books.map((book) => {
        return <BookItem className={styles.booklist} key={book.id} />;
      })}
    </ul>
  );
}
