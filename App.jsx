import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ProductCard from './components/ProductCard'
import CartPage from './pages/CartPage'
import './App.css'

function App() {
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const products = [
  {
    id: 1,
    name: "Classic Men's Watch",
    price: 3299,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
  },
  {
    id: 2,
    name: "Mocha HandBag",
    price: 2699,
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
  },
  {
    id: 3,
    name: "Kids Sneakers",
    price: 1499,
    category: "Kids",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 4,
    name: "Women's Sunglasses",
    price: 1999,
    category: "Women",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
  },
  {
    id: 5,
    name: "Men's Jacket",
    price: 3499,
    category: "Men",
    image: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?w=800"
  },
  {
    id: 6,
    name: "Kids Hoodie",
    price: 1799,
    category: "Kids",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800"
 }
]
  const addToCart = (product) => {
  const existingProduct = cart.find(
    (item) => item.name === product.name
  )

  if (existingProduct) {
    setCart(
      cart.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  } else {
    setCart([
      ...cart,
      { ...product, quantity: 1 }
    ])
  }
}
const increaseQuantity = (productName) => {
  setCart(
    cart.map((item) =>
      item.name === productName
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  )
}
const removeFromCart = (productName) => {
  setCart(
    cart
      .map((item) =>
        item.name === productName
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  )
}
  const totalPrice = cart.reduce(
  (total, item) =>
    total + item.price * item.quantity,
  0
)
  const filteredProducts = products.filter((product) => {
  const matchesCategory =
    category === 'All' || product.category === category

  const matchesSearch =
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())

  return matchesCategory && matchesSearch
})
return (
  <Routes>
    <Route
      path="/"
      element={
        <div className="app">
    <nav className="navbar">
  <h1>LunaStyle</h1>

  <div>
    <Link to="/">Home</Link>

    <Link to="/cart">
      Cart 🛒 ({cart.length})
    </Link>
  </div>
</nav>

    <section className="hero">
      <h2>Discover Fashion That Defines You</h2>
      <p>Explore trendy styles for Men, Women, and Kids.</p>

      <button
        onClick={() =>
          document
            .querySelector('.products')
            .scrollIntoView({ behavior: 'smooth' })
        }
      >
        Shop Collection
      </button>
    </section>
    <section className="about-section">
  <h2>Why LunaStyle?</h2>

  <p>
    LunaStyle is a modern fashion e-commerce platform
    offering trendy clothing and accessories for Men,
    Women and Kids. Built using React.js and Vite.
  </p>
</section>

    <section className="products">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="categories">
        <button onClick={() => setCategory('All')}>All</button>
        <button onClick={() => setCategory('Men')}>Men</button>
        <button onClick={() => setCategory('Women')}>Women</button>
        <button onClick={() => setCategory('Kids')}>Kids</button>
      </div>

      <h2>Featured Products</h2>

      <div className="product-container">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
    
    <footer>
  <p>
  © 2026 LunaStyle | React.js E-Commerce Project
  </p>
</footer>
        </div>
      }
    />

    <Route
      path="/cart"
      element={
        <CartPage
          cart={cart}
          removeFromCart={removeFromCart}
          increaseQuantity={increaseQuantity}
          totalPrice={totalPrice}
        />
      }
    />
  </Routes>
)
}

export default App