import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import ProductViewer from "./components/product-viewer";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
    </main>
  );
};

export default App;
