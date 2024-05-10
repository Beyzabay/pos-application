import "./App.css";
import CardTotal from "./Components/CardTotal";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import Products from "./Components/Products";

function App() {
  return(
    <>
        <Header/>
        <div className="flex justify-between p-4">
        {/* We make 100vh-(header+categories height) for the correct scroll size. */}
        <div className="categories overflow-auto max-h-[calc(100vh-107px)]">
            <Categories/>
          </div>
          <div className="product">
            <Products/>
          </div>
          <div className="total">
            <CardTotal/>
          </div>
        </div>
    </>
  )
}

export default App;
