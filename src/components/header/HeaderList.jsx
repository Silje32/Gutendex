import { Link } from "react-router-dom";

export default function HeaderList({ categories }) {
  return (
    <nav>
      {categories.map((category) => (
        <Link
          key={category.name}
          className="category-link"
          to={category.filepath}
        >
          {category.title}
        </Link>
      ))}
    </nav>
  );
}
