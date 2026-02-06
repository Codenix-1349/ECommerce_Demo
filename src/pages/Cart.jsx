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
    return <div className="empty">Cart is empty.</div>;
  }

  return (
    <>
      <table>
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

              <td>{product.title}</td>

              <td>{formatEUR(product.price)}</td>

              <td>
                <div className="actions">
                  <button
                    className="btn-light"
                    onClick={() => actions.remove(product.id)}
                  >
                    -
                  </button>
                  <span className="qty">{quantity}</span>
                  <button
                    className="btn-primary"
                    onClick={() => actions.add(product)}
                  >
                    +
                  </button>
                </div>
              </td>

              <td>{formatEUR(product.price * quantity)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total">
        <span>Total</span>
        <span>{formatEUR(total)}</span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingBottom: 28,
        }}
      >
        <button className="btn-primary" onClick={handleCheckout}>
          Jetzt kaufen (PayPal)
        </button>
      </div>
    </>
  );
};

export default Cart;
