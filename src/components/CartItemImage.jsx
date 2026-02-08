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
      className="relative group inline-block"
      onMouseEnter={chooseSide}
    >
      <div className="avatar">
        <div className="w-12 h-12 mask mask-squircle bg-white p-1 border border-base-200">
          <img className="object-contain w-full h-full" src={product.image} alt={product.title} />
        </div>
      </div>

      <div 
        className={`absolute top-0 z-[100] w-72 bg-base-100 border border-base-300 shadow-2xl rounded-box p-4 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 pointer-events-none
        ${side === 'left' ? 'right-full mr-2' : 'left-full ml-2'}
        `}
        role="tooltip" 
        aria-hidden="true"
      >
        <h3 className="font-bold text-sm mb-2 text-base-content">{product.title}</h3>

        <div className="mb-3">
          <div className="text-[10px] font-bold uppercase text-base-content/60 mb-1">Description</div>
          <p className="text-xs text-base-content line-clamp-4">{product.description}</p>
        </div>

        {(typeof ratingRate === "number" ||
          typeof ratingCount === "number") && (
          <div className="flex items-center justify-between bg-base-200/50 p-2 rounded">
            <span className="text-[10px] font-bold uppercase text-base-content/70">Rating</span>
            <div className="flex items-center gap-1 font-mono text-xs">
                <span className="text-warning">★</span>
              <span>{typeof ratingRate === "number" ? ratingRate.toFixed(1) : "-"}</span>
               <span className="text-base-content/50">/ 5</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItemImage;
