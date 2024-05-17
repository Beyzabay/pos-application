import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import ShoppingCard from "./Pages/ShoppingCard";
import Header from "./Components/Header";
import Bill from "./Pages/Bill";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/ShoppingCard" element={<ShoppingCard />} />
          <Route path="/Bill" element={<Bill />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
