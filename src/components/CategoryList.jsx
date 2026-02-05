import { Link } from "react-router-dom";

const CategoryList = ({ categories }) => {
  return (
    <div className="categories">
      {categories.map((c) => (
        <Link
          className="chip"
          key={c}
          to={`/category/${encodeURIComponent(c)}`}
        >
          {c}
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
