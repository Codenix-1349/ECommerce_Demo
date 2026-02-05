import { useEffect, useMemo, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import CategoryList from '../components/CategoryList.jsx'
import ProductCard from '../components/ProductCard.jsx'

const Home = () => {
  const { cart, actions } = useOutletContext()
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        setError('')
        const [catRes, prodRes] = await Promise.all([
          fetch('https://fakestoreapi.com/products/categories'),
          fetch('https://fakestoreapi.com/products'),
        ])

        if (!catRes.ok || !prodRes.ok) throw new Error('Failed to load data')

        const [cats, prods] = await Promise.all([catRes.json(), prodRes.json()])
        setCategories(Array.isArray(cats) ? cats : [])
        setProducts(Array.isArray(prods) ? prods : [])
      } catch {
        setError('Could not load products.')
      }
    }

    load()
  }, [])

  const quantities = useMemo(() => {
    const map = {}
    for (const [id, entry] of Object.entries(cart)) map[id] = entry.quantity
    return map
  }, [cart])

  if (error) return <div className="empty">{error}</div>

  return (
    <>
      <CategoryList categories={categories} />

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
  )
}

export default Home
