import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import LogIn from "./pages/log-in";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
}

export default App;
