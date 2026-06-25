import { useState } from 'react'

function ProductCard({ name, price, image, addToCart }) {
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart({ name, price, image })

    setAdded(true)

    setTimeout(() => {
      setAdded(false)
    }, 1000)
  }

  return (
    <div className="product-card">
      <img src={image} alt={name} />

      <h3>{name}</h3>

      <p className="price">₹{price}</p>

      <button onClick={handleAddToCart}>
        {added ? '✓ Added' : 'Add to Cart'}
      </button>
    </div>
  )
}

export default ProductCard