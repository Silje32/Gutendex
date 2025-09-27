export default function BookList({ data: { books } }) {
  return (
    <ul>
      {books.map((book) => {
        return <FetchBooks key={book.id} />;
      })}
    </ul>
  );
}
