export default function BookItem({ data: { books } }) {
  return (
    <li>
      <p>{books.name}</p>
    </li>
  );
}
