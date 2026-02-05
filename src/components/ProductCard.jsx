import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { formatEUR } from "../utils/format.js";

const ProductCard = ({ product, quantityInCart, onAdd, onRemove }) => {
  const ratingRate = product?.rating?.rate;
  const ratingCount = product?.rating?.count;

  const cardRef = useRef(null);
  const [side, setSide] = useState("right"); // 'right' | 'left'

  const chooseSide = () => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;

    // matches CSS popover width
    const POPOVER_WIDTH = 320;
    const GAP = 12;

    const spaceRight = viewportWidth - rect.right;
    const spaceLeft = rect.left;

    if (spaceRight >= POPOVER_WIDTH + GAP) setSide("right");
    else if (spaceLeft >= POPOVER_WIDTH + GAP) setSide("left");
    else setSide(spaceRight >= spaceLeft ? "right" : "left");
  };

  useEffect(() => {
    const onResize = () => chooseSide();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={cardRef}
      className={`card card-popover ${side === "left" ? "popover-left" : "popover-right"}`}
      onMouseEnter={chooseSide}
      onFocus={chooseSide}
      tabIndex={0}
    >
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

      {/* Side Popover (no layout shift, does not cover the card) */}
      <div className="popover" role="tooltip" aria-hidden="true">
        <div className="popover-title">Details</div>

        <div className="popover-section">
          <div className="popover-label">Description</div>
          <div className="popover-text">{product.description}</div>
        </div>

        {(typeof ratingRate === "number" ||
          typeof ratingCount === "number") && (
          <div className="popover-row">
            <div className="popover-label">Rating</div>
            <div className="popover-value">
              {typeof ratingRate === "number" ? ratingRate.toFixed(1) : "-"} / 5
              {typeof ratingCount === "number" ? ` (${ratingCount})` : ""}
            </div>
          </div>
        )}
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
