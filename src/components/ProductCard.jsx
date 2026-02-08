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
      className={`relative card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-200 border border-base-200 group`}
      onMouseEnter={chooseSide}
    >
      <figure className="px-4 pt-4 h-48 bg-white flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-40 w-auto object-contain"
          loading="lazy" 
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-sm h-10 overflow-hidden text-ellipsis line-clamp-2" title={product.title}>
          {product.title}
        </h2>
        
        <div className="flex justify-between items-center mt-2">
          <div className="font-bold text-lg text-primary">{formatEUR(product.price)}</div>
          <Link
            className="badge badge-outline text-xs"
            to={`/category/${encodeURIComponent(product.category)}`}
          >
            {product.category}
          </Link>
        </div>

        <div className="card-actions justify-end mt-4">
          {quantityInCart > 0 ? (
             <div className="join">
                <button className="join-item btn btn-sm" onClick={() => onRemove(product.id)}>-</button>
                <button className="join-item btn btn-sm btn-disabled text-base-content font-bold">{quantityInCart}</button>
                <button className="join-item btn btn-sm btn-primary" onClick={() => onAdd(product)}>+</button>
             </div>
          ) : (
            <button className="btn btn-primary btn-sm w-full" onClick={() => onAdd(product)}>
              Add to cart
            </button>
          )}
        </div>
      </div>

        {/* Popover */}
        <div 
            className={`absolute top-0 z-50 w-80 bg-base-100 border border-base-300 shadow-2xl rounded-box p-4 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto
            ${side === 'left' ? 'right-full mr-2' : 'left-full ml-2'}
            `}
            role="tooltip" 
            aria-hidden="true"
        >
            <h3 className="font-bold text-lg mb-2 text-base-content">{product.title}</h3>
            
            <div className="mb-4">
                <div className="text-xs font-semibold uppercase text-base-content/60 mb-1">Description</div>
                <p className="text-sm text-base-content line-clamp-6">{product.description}</p>
            </div>

            {(typeof ratingRate === "number" || typeof ratingCount === "number") && (
                <div className="flex items-center justify-between bg-base-200/50 p-2 rounded-lg">
                    <span className="text-xs font-bold uppercase text-base-content/70">Rating</span>
                    <div className="flex items-center gap-1 font-mono text-sm">
                        <span className="text-warning">★</span>
                        <span>{typeof ratingRate === "number" ? ratingRate.toFixed(1) : "-"}</span>
                        <span className="text-base-content/50">/ 5</span>
                        <span className="text-xs text-base-content/50 ml-1">
                             {typeof ratingCount === "number" ? `(${ratingCount})` : ""}
                        </span>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
};

export default ProductCard;
