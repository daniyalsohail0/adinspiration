import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import LogIn from "./pages/log-in";
import SignUp from "./pages/sign-up";
import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <ProtectedRoutes userType={"notLoggedIn"} />
    </Routes>
  );
}

export default App;
