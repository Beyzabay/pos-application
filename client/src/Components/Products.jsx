import React from "react";

function Products() {
  return (
    <div className="container">
      <div className="flex gap-7 flex-wrap justify-between">
        <div class="max-w-24 bg-white border border-gray-200 rounded-lg shadow">
          <a href="/">
            <img
              class="rounded-t-lg"
              src="https://cdn.yemek.com/mncrop/940/625/uploads/2018/02/arnavut-cilegi.jpg"
              alt=""
            />
          </a>
          <div class="px-3">
            <a href="/">
              <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900">
                Çilek
              </h5>
            </a>
            <p class="mb-3 font-normal dark:text-gray-400">24₺</p>
          </div>
        </div>
        <div class="max-w-24 bg-white border border-gray-200 rounded-lg shadow">
          <a href="/">
            <img
              class="rounded-t-lg"
              src="https://cdn.yemek.com/mncrop/940/625/uploads/2018/02/arnavut-cilegi.jpg"
              alt=""
            />
          </a>
          <div class="px-3">
            <a href="/">
              <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900">
                Çilek
              </h5>
            </a>
            <p class="mb-3 font-normal dark:text-gray-400">24₺</p>
          </div>
        </div>
        <div class="max-w-24 bg-white border border-gray-200 rounded-lg shadow">
          <a href="/">
            <img
              class="rounded-t-lg"
              src="https://cdn.yemek.com/mncrop/940/625/uploads/2018/02/arnavut-cilegi.jpg"
              alt=""
            />
          </a>
          <div class="px-3">
            <a href="/">
              <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900">
                Çilek
              </h5>
            </a>
            <p class="mb-3 font-normal dark:text-gray-400">24₺</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
