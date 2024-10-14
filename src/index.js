import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

function App() {
  return (
    <>
      <Background />
      <div>
        <h1>Hello World</h1>
      </div>
    </>
  );
}

function Background() {
  return (
    <div
      style={{
        backgroundImage: "url('pizzas/pizza-bg.jpg')",
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "absolute",
        top: 0,
        left: 0,
        opacity: 0.4,
        zIndex: -1,
      }}
    ></div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
