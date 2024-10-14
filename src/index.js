import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "BBQ Blast",
    ingredients:
      "Spicy chicken marinated in BBQ sauce, chicken sausage, onions, musrooms and jalapenos",
    price: 1599,
    photoName: "pizzas/bbq-blast.jpg",
    soldOut: false,
  },
  {
    name: "Beef Pepperoni",
    ingredients: "Beef Pepparoni and Mozzarella cheese",
    price: 1499,
    photoName: "pizzas/beef-pepperoni.jpg",
    soldOut: false,
  },
  {
    name: "Beef Supremo",
    ingredients: "Beef, Beef Pepperoni and musroom",
    price: 1599,
    photoName: "pizzas/beef-supremo.jpg",
    soldOut: false,
  },
  {
    name: "Chicken Exortica",
    ingredients: "Chicken, onion capsicum and jalapenos",
    price: 1399,
    photoName: "pizzas/chicken-exortica.jpg",
    soldOut: false,
  },
  {
    name: "Double Cheese",
    ingredients:
      "Mounds of golden melting cheese on a rich bed of red tomato sauce",
    price: 1299,
    photoName: "pizzas/double-cheese.jpg",
    soldOut: true,
  },
  {
    name: "Veggie Supreme",
    ingredients:
      "Capsicum, onions, musrooms, tomatoes, sweet corn and black olives",
    price: 1199,
    photoName: "pizzas/veggie-supreme.jpg",
    soldOut: true,
  },
];

function App() {
  return (
    <>
      <Background />
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Pizza Hut</h1>
    </header>
  );
}

function Menu() {
  // const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2> Our menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
          //   <Pizza
          //     name={pizza.name}
          //     ingredients={pizza.ingredients}
          //     photoName={pizza.photoName}
          //     price={pizza.price}
          //   />
        ))}
      </ul>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="order">
        <p>We're currently open.</p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>৳{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Background() {
  return (
    <main
      style={{
        backgroundImage: "url('pizzas/pizza-bg.jpg')",
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "fixed",
        top: 0,
        left: 0,
        opacity: 0.6,
        zIndex: -1,
      }}
    ></main>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
