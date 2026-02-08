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
    return <div className="text-center p-8 text-error font-bold">{error}</div>;
  }

  return (
    <>
      <div className="text-2xl font-bold my-6 capitalize">
        Category: <span className="text-primary">{decodedCategory}</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-8">
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
