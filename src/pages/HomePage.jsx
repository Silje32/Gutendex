import { BookList } from "../components";
import { useTempContext } from "../contex/tempContext.jsx";

export default function HomePage() {
  const { books } = useTempContext();

  return (
    <>
      <BookList books={books.results} />
    </>
  );
}
