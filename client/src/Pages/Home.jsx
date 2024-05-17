import React from "react";
import "../App.css";
import CardTotal from "../Components/CardTotal";
import Categories from "../Components/Categories";
import Products from "../Components/Products";

function Home() {
  return (
    <>
      <div className="flex justify-between p-4 gap-7 md:flex-row flex-col">
        {/* We make 100vh-(header+categories height) for the correct scroll size. */}
        <div className="flex-4 categories overflow-auto max-h-[calc(100vh-107px)] min-w-[150px]">
          <Categories />
        </div>
        <div className="product overflow-auto max-h-[calc(100vh-107px)]">
          <Products />
        </div>
        <div className="total min-w-[250px] border md: -mr-4">
          <CardTotal />
        </div>
      </div>
    </>
  );
}

export default Home;
