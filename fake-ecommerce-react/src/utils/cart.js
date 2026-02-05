const STORAGE_KEY = 'cart'

export const loadCart = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : {}
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}

export const saveCart = (cart) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
}

// cart shape: { [productId]: { product, quantity } }
export const addToCart = (cart, product) => {
  const id = String(product.id)
  const current = cart[id]
  const nextQty = (current?.quantity ?? 0) + 1
  return { ...cart, [id]: { product, quantity: nextQty } }
}

export const removeFromCart = (cart, productId) => {
  const id = String(productId)
  const current = cart[id]
  if (!current) return cart

  const nextQty = current.quantity - 1
  if (nextQty <= 0) {
    const { [id]: _removed, ...rest } = cart
    return rest
  }
  return { ...cart, [id]: { ...current, quantity: nextQty } }
}

export const getCartCount = (cart) => {
  return Object.values(cart).reduce((sum, entry) => sum + (entry.quantity || 0), 0)
}

export const getCartLines = (cart) => Object.values(cart)

export const getCartTotal = (cart) => {
  return Object.values(cart).reduce((sum, entry) => {
    const price = Number(entry.product?.price ?? 0)
    const qty = Number(entry.quantity ?? 0)
    return sum + price * qty
  }, 0)
}
