import "./App.css";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import ShoppingCard from "./Pages/ShoppingCard";
import Header from "./Components/Header";
import Bill from "./Pages/Bill";
import Customers from "./Pages/Customers";
import Statistics from "./Pages/Statistics";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";

function App() {
  const location = useLocation();

  const isAuthPage = location.pathname === "/LoginPage" || location.pathname === "/RegisterPage";

  return (
    <div className="App">
      {!isAuthPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ShoppingCard" element={<ShoppingCard />} />
        <Route path="/Bill" element={<Bill />} />
        <Route path="/Customers" element={<Customers />} />
        <Route path="/Statistics" element={<Statistics />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}
function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;

