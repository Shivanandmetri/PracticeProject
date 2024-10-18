import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
// import About from "./Components/About";
import Contact from "./Components/Contact";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";
import Settings from "./Components/Settings";
import Register from "./Components/Register/Register";
import "./App.css";
// import Demo from "./Components/Demo/Demo";
// import CreditCardApplication from "./Components/Demo/Demo1";
import Practice from "./Components/Demo/Practice";
import CreditCardPage from "./Components/Demo/Demo1";
import ProtectedAdminPage from "./Components/HOC/ProtectedAdminPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        {/* <Route path="/about" element={<CreditCardApplication />} exact /> */}
        <Route path="/about" element={<CreditCardPage />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route path="/dashboard" element={<Dashboard />} exact>
          <Route path="profile" element={<Profile />} exact />
          <Route path="settings" element={<Settings />} exact />
        </Route>
        <Route path="practice" element={<Practice />}></Route>
        <Route
          path="practice1"
          element={<ProtectedAdminPage userRole={{ role: "admin" }} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
