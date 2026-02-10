import BookItem from "./BookItem.jsx";
import styles from "./BookList.module.css";

export default function BookList({ books }) {
  if (!books) return <h1>Venter...</h1>;

  return (
    <ul>
      {books.map((book) => {
        return <BookItem key={book.id} {...book} />;
      })}
    </ul>
  );
}
