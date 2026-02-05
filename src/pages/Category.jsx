import { useEffect, useMemo, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";

const Category = () => {
  const { categoryName } = useParams();
  const decodedCategory = decodeURIComponent(categoryName || "");
  const { cart, actions } = useOutletContext();

  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        setError("");
        const res = await fetch(
          `https://fakestoreapi.com/products/category/${encodeURIComponent(decodedCategory)}`,
        );

        if (!res.ok) throw new Error("Failed to load category");

        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch {
        setError("Could not load category products.");
      }
    };

    if (decodedCategory) load();
  }, [decodedCategory]);

  const quantities = useMemo(() => {
    const map = {};
    for (const [id, entry] of Object.entries(cart)) {
      map[id] = entry.quantity;
    }
    return map;
  }, [cart]);

  if (error) {
    return <div className="empty">{error}</div>;
  }

  return (
    <>
      <div style={{ paddingTop: 16, fontWeight: 900, fontSize: 16 }}>
        Category: {decodedCategory}
      </div>

      <div className="grid">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            quantityInCart={quantities[String(p.id)] ?? 0}
            onAdd={actions.add}
            onRemove={actions.remove}
          />
        ))}
      </div>
    </>
  );
};

export default Category;
