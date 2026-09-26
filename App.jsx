import { useState } from "react";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <nav className="navbar">
        <h2>🌿 Paradise Nursery</h2>

        <div>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("plants")}>Plants</button>
          <button onClick={() => setPage("cart")}>Cart</button>
        </div>
      </nav>

      {page === "home" && (
        <section className="landing">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <p>Bring nature into your home.</p>

            <button onClick={() => setPage("plants")}>
              Get Started
            </button>
          </div>
        </section>
      )}

      {page === "plants" && <ProductList />}

      {page === "cart" && <CartItem />}

      {page === "home" && <AboutUs />}
    </div>
  );
}

export default App;