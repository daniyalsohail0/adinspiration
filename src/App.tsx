import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import Creator from "./pages/creator";
import Brand from "./pages/brand-page";
import Product from "./pages/product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/creator" element={<Creator />} />
      <Route path="/brand" element={<Brand />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}

export default App;
