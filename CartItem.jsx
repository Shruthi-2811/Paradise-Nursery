import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <nav className="navbar">
        <h2>🌿 Paradise Nursery</h2>
        <div>
          <a href="/">Home</a>
          <a href="/#plants">Plants</a>
          <a href="#cart">🛒 Cart</a>
        </div>
      </nav>

      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <a href="/#plants">Continue Shopping</a>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p>Unit Price: ₹{item.price}</p>
                <p>
                  Total: ₹{item.price * item.quantity}
                </p>

                <button
                  onClick={() =>
                    dispatch(decreaseQuantity(item.id))
                  }
                >
                  −
                </button>

                <span> {item.quantity} </span>

                <button
                  onClick={() =>
                    dispatch(increaseQuantity(item.id))
                  }
                >
                  +
                </button>

                <button
                  className="delete-button"
                  onClick={() =>
                    dispatch(removeFromCart(item.id))
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h2>Total Amount: ₹{total}</h2>

            <button
              onClick={() => alert("Checkout Coming Soon!")}
            >
              Checkout
            </button>

            <a href="/#plants">
              <button>Continue Shopping</button>
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;