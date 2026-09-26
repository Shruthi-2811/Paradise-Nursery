import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 499,
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2e9a?w=400",
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 599,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400",
  },
  {
    id: 3,
    name: "Monstera",
    category: "Indoor Plants",
    price: 799,
    image: "https://images.unsplash.com/photo-1614594575927-9c6e7f0d5f9a?w=400",
  },
  {
    id: 4,
    name: "Aloe Vera",
    category: "Indoor Plants",
    price: 399,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400",
  },
  {
    id: 5,
    name: "Spider Plant",
    category: "Indoor Plants",
    price: 449,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400",
  },
  {
    id: 6,
    name: "ZZ Plant",
    category: "Indoor Plants",
    price: 699,
    image: "https://images.unsplash.com/photo-1632207691142-9e6b1b7a3a6a?w=400",
  },

  {
    id: 7,
    name: "Rose",
    category: "Flowering Plants",
    price: 349,
    image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=400",
  },
  {
    id: 8,
    name: "Orchid",
    category: "Flowering Plants",
    price: 899,
    image: "https://images.unsplash.com/photo-1566907225473-8a8f8c6b1a1b?w=400",
  },
  {
    id: 9,
    name: "Jasmine",
    category: "Flowering Plants",
    price: 299,
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400",
  },
  {
    id: 10,
    name: "Hibiscus",
    category: "Flowering Plants",
    price: 399,
    image: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=400",
  },
  {
    id: 11,
    name: "Marigold",
    category: "Flowering Plants",
    price: 249,
    image: "https://images.unsplash.com/photo-1594135034591-0a2d1c3e6d7c?w=400",
  },
  {
    id: 12,
    name: "Lavender",
    category: "Flowering Plants",
    price: 549,
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400",
  },

  {
    id: 13,
    name: "Basil",
    category: "Herbal Plants",
    price: 199,
    image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400",
  },
  {
    id: 14,
    name: "Mint",
    category: "Herbal Plants",
    price: 149,
    image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1d1?w=400",
  },
  {
    id: 15,
    name: "Rosemary",
    category: "Herbal Plants",
    price: 249,
    image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400",
  },
  {
    id: 16,
    name: "Thyme",
    category: "Herbal Plants",
    price: 229,
    image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=400",
  },
  {
    id: 17,
    name: "Coriander",
    category: "Herbal Plants",
    price: 129,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400",
  },
  {
    id: 18,
    name: "Lemongrass",
    category: "Herbal Plants",
    price: 179,
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div>
      <nav className="navbar">
        <h2>🌿 Paradise Nursery</h2>

        <div>
          <a href="/">Home</a>
          <a href="#plants">Plants</a>
          <a href="#cart">🛒 Cart ({totalItems})</a>
        </div>
      </nav>

      <main id="plants">
        <h1>Our Plants</h1>

        {categories.map((category) => (
          <section key={category}>
            <h2>{category}</h2>

            <div className="plant-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => {
                  const added = cartItems.some(
                    (item) => item.id === plant.id
                  );

                  return (
                    <div className="plant-card" key={plant.id}>
                      <img src={plant.image} alt={plant.name} />

                      <h3>{plant.name}</h3>

                      <p>₹{plant.price}</p>

                      <button
                        disabled={added}
                        onClick={() => dispatch(addToCart(plant))}
                      >
                        {added ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  );
                })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;