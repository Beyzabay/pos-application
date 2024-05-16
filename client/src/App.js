import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import ShoppingCard from "./ShoppingCard";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ShoppingCard" element={<ShoppingCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
