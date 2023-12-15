import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import Creator from "./pages/creator";
import Brand from "./pages/brand-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/creator" element={<Creator />} />
      <Route path="/brand" element={<Brand />} />
    </Routes>
  );
}

export default App;
