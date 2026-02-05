const CategoryList = ({ categories }) => {
  return (
    <div className="categories">
      {categories.map((c) => (
        <span className="chip" key={c}>
          {c}
        </span>
      ))}
    </div>
  )
}

export default CategoryList
