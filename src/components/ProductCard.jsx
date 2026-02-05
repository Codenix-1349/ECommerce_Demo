import { Link } from "react-router-dom";
import { formatEUR } from "../utils/format.js";

const ProductCard = ({ product, quantityInCart, onAdd, onRemove }) => {
  return (
    <div className="card">
      <div className="imgwrap">
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>

      <div className="title" title={product.title}>
        {product.title}
      </div>

      <div className="meta">
        <div className="price">{formatEUR(product.price)}</div>

        <Link
          className="category"
          to={`/category/${encodeURIComponent(product.category)}`}
        >
          {product.category}
        </Link>
      </div>

      {quantityInCart > 0 ? (
        <div className="actions">
          <button className="btn-light" onClick={() => onRemove(product.id)}>
            -
          </button>
          <span className="qty">{quantityInCart}</span>
          <button className="btn-primary" onClick={() => onAdd(product)}>
            +
          </button>
        </div>
      ) : (
        <button className="btn-primary" onClick={() => onAdd(product)}>
          Add to cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
