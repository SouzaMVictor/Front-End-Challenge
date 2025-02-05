import { Header } from "./Header";
import "./App.css";
import { Hero } from "./Hero.1";
import { MaisVendidos } from "./MaisVendidos";
import { Newsletter } from "./Newsletter";
import { Footer } from "./Footer";
import { useState, useEffect } from "react";

function App() {
  const [cartCount, setCartCount] = useState(() => {
    const savedCart = localStorage.getItem("cartCount");
    return savedCart ? Number(savedCart) : 0;
  });
  useEffect(() => {
    localStorage.setItem("cartCount", cartCount);
  }, [cartCount]);
  function handleAddToCart() {
    setCartCount(cartCount + 1);
  }
  return (
    <>
      <Header cartCount={cartCount} />
      <Hero />
      <MaisVendidos onAddToCart={handleAddToCart} />
      <Newsletter />
      <Footer />
    </>
  );
}
export default App;
