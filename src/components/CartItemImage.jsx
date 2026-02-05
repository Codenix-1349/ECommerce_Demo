import { useEffect, useRef, useState } from "react";

const CartItemImage = ({ product }) => {
  const wrapRef = useRef(null);
  const [side, setSide] = useState("right"); // 'right' | 'left'

  const chooseSide = () => {
    const el = wrapRef.current;
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

  const ratingRate = product?.rating?.rate;
  const ratingCount = product?.rating?.count;

  return (
    <div
      ref={wrapRef}
      className={`cart-img-popover ${side === "left" ? "cart-popover-left" : "cart-popover-right"}`}
      onMouseEnter={chooseSide}
    >
      <img className="rowimg" src={product.image} alt={product.title} />

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
    </div>
  );
};

export default CartItemImage;
