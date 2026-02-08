import { useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import { formatEUR } from "../utils/format.js";
import CartItemImage from "../components/CartItemImage.jsx";

const Cart = () => {
  const { cart, actions } = useOutletContext();

  const items = useMemo(() => Object.values(cart || {}), [cart]);

  const total = useMemo(() => {
    return items.reduce((sum, it) => sum + it.product.price * it.quantity, 0);
  }, [items]);

  const handleCheckout = () => {
    // Simple redirect (demo). Not a real payment.
    window.open("https://www.paypal.com/", "_blank", "noopener,noreferrer");
  };

  if (!items.length) {
    return <div className="text-center p-8 text-neutral-content font-semibold">Cart is empty.</div>;
  }

  return (
    <div className="overflow-visible">
      <table className="table table-zebra w-full mb-8">
        <thead>
          <tr>
            <th>Item</th>
            <th>Title</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Line</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ product, quantity }) => (
            <tr key={product.id}>
              <td>
                <CartItemImage product={product} />
              </td>

              <td className="font-medium">{product.title}</td>

              <td className="font-mono">{formatEUR(product.price)}</td>

              <td>
                <div className="join">
                  <button
                    className="join-item btn btn-xs"
                    onClick={() => actions.remove(product.id)}
                  >
                    -
                  </button>
                  <button className="join-item btn btn-xs btn-disabled text-base-content font-bold">{quantity}</button>
                  <button
                    className="join-item btn btn-xs btn-primary"
                    onClick={() => actions.add(product)}
                  >
                    +
                  </button>
                </div>
              </td>

              <td className="font-bold font-mono text-primary">{formatEUR(product.price * quantity)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex flex-col items-end gap-4 mb-8">
        <div className="text-2xl font-bold">
          Total: <span className="text-primary">{formatEUR(total)}</span>
        </div>
        <button className="btn btn-primary btn-wide" onClick={handleCheckout}>
          Jetzt kaufen (PayPal)
        </button>
      </div>
    </div>
  );
};

export default Cart;
