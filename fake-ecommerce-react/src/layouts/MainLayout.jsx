import { Link, Outlet } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import {
  getCartCount,
  loadCart,
  saveCart,
  addToCart,
  removeFromCart,
} from "../utils/cart.js";

const MainLayout = () => {
  const [cart, setCart] = useState(() => loadCart());

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  const cartCount = useMemo(() => getCartCount(cart), [cart]);

  const actions = useMemo(() => {
    return {
      add: (product) => setCart((prev) => addToCart(prev, product)),
      remove: (productId) => setCart((prev) => removeFromCart(prev, productId)),
    };
  }, []);

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <div className="brand">SuperDuper eCommerce Seite*bämmm*</div>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/cart">
              Cart <span className="badge">{cartCount}</span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <Outlet context={{ cart, setCart, actions }} />
      </main>
    </>
  );
};

export default MainLayout;
