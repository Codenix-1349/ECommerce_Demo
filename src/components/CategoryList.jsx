import { Link } from "react-router-dom";

const CategoryList = ({ categories }) => {
  return (
    <div className="flex flex-wrap gap-2 py-4">
      {categories.map((c) => (
        <Link
          className="btn btn-sm btn-outline rounded-full normal-case"
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
