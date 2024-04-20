import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { NavBar } from "./components/NavBar/NavBar";

export const Routing = () => {
  return (
    <Router basename="/">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};
