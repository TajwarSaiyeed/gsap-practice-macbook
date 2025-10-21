import Navbar from "./components/navbar";
import Hero from "./components/hero";
import ProductViewer from "./components/product-viewer";

import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Showcase from "./components/showcase";
import Performance from "./components/performance";
import Features from "./components/features";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
    </main>
  );
};

export default App;
