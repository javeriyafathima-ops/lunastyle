function CartPage({
  cart,
  removeFromCart,
  increaseQuantity,
  totalPrice,
}) {
  return (
    <div className="cart">
      <h2>Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. Start shopping now!</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <h3>{item.name}</h3>

            <p>₹{item.price}</p>

            <p>Quantity: {item.quantity}</p>

            <p>
              Subtotal: ₹
              {item.price * item.quantity}
            </p>

            <button
              onClick={() =>
                removeFromCart(item.name)
              }
            >
              -
            </button>

            <button
              onClick={() =>
                increaseQuantity(item.name)
              }
            >
              +
            </button>
          </div>
        ))
      )}

      <h2>Total: ₹{totalPrice}</h2>
      <button
  className="checkout-btn"
  onClick={() => alert('Order Placed Successfully!')}
>
  Proceed to Checkout
</button>
    </div>
  )
}

export default CartPage