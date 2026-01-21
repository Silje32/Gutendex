import BookItem from "../BookItem.jsx";

export default function BookList({ data: { books } }) {
  return (
    <ul>
      {books.map((book) => {
        return <BookItem key={book.id} />;
      })}
    </ul>
  );
}
