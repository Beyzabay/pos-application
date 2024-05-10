import "./App.css";
import CardTotal from "./Components/CardTotal";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import Products from "./Components/Products";

function App() {
  return(
    <>
        <Header/>
        <div className="flex justify-between p-4 gap-7">
        {/* We make 100vh-(header+categories height) for the correct scroll size. */}
        <div className="flex-4 categories overflow-auto max-h-[calc(100vh-107px)]">
            <Categories/>
          </div>
          <div className="product flex-4">
            <Products/>
          </div>
          <div className="total flex-4">
            <CardTotal/>
          </div>
        </div>
    </>
  )
}

export default App;
