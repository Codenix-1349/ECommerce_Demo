import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Category from "./pages/Category.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="category/:categoryName" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
