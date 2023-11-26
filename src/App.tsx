import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import LogIn from "./pages/log-in";
import SignUp from "./pages/sign-up";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
