import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import Creator from "./pages/creator";
import Gallery from "./pages/gallery";
import UploadNewAd from "./pages/upload-ad";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/creator" element={<Creator />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/upload-ad" element={<UploadNewAd />} />
    </Routes>
  );
}

export default App;
