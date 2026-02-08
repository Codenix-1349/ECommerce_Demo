import { Link, Outlet } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import {
  getCartCount,
  loadCart,
  saveCart,
  addToCart,
  removeFromCart,
} from "../utils/cart.js";
import ThemeToggle from "../components/ThemeToggle.jsx";

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
      <header className="navbar bg-primary text-primary-content sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex-1">
             <Link to="/" className="btn btn-ghost text-xl font-bold tracking-tight normal-case">SuperDuper eCommerce Seite</Link>
          </div>
          <div className="flex-none gap-2">
            <Link to="/" className="btn btn-ghost btn-sm">Home</Link>
            <Link to="/cart" className="btn btn-ghost btn-sm relative">
              Cart 
              {cartCount > 0 && (
                  <span className="badge badge-sm badge-secondary ml-1 indicator-item">{cartCount}</span>
              )}
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Outlet context={{ cart, setCart, actions }} />
      </main>
    </>
  );
};

export default MainLayout;
