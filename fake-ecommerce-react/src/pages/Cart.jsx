import { useMemo } from 'react'
import { useOutletContext } from 'react-router-dom'
import { formatEUR } from '../utils/format.js'
import { getCartLines, getCartTotal } from '../utils/cart.js'

const Cart = () => {
  const { cart, actions } = useOutletContext()

  const lines = useMemo(() => getCartLines(cart), [cart])
  const total = useMemo(() => getCartTotal(cart), [cart])

  if (lines.length === 0) return <div className="empty">Your cart is empty.</div>

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Line</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {lines.map(({ product, quantity }) => {
            const lineTotal = Number(product.price) * Number(quantity)
            return (
              <tr key={product.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <img className="rowimg" src={product.image} alt={product.title} />
                    <div style={{ fontWeight: 700, fontSize: 13 }}>{product.title}</div>
                  </div>
                </td>
                <td>{formatEUR(product.price)}</td>
                <td>{quantity}</td>
                <td>{formatEUR(lineTotal)}</td>
                <td>
                  <div className="actions">
                    <button className="btn-light" onClick={() => actions.remove(product.id)}>
                      -
                    </button>
                    <button className="btn-primary" onClick={() => actions.add(product)}>
                      +
                    </button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className="total">
        <div>Total:</div>
        <div>{formatEUR(total)}</div>
      </div>
    </>
  )
}

export default Cart
