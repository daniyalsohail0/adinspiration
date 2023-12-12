import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import LogIn from "./pages/log-in";
import SignUp from "./pages/sign-up";
import Creator from "./pages/creator";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/creator" element={<Creator />} />
    </Routes>
  );
}

export default App;
