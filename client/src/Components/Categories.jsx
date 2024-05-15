import React from "react";

function Categories() {
  return (
    <div className="mb-5">
      <ul className="flex md:flex-col overflow-auto gap-7">
        <li className="categories-li hover:bg-pink-700 cursor-pointer">Tümü</li>
        <li className="categories-li hover:bg-pink-700 cursor-pointer">Yiyecek</li>
        <li className="categories-li hover:bg-pink-700 cursor-pointer">içecek</li>
        <li className="categories-li hover:bg-pink-700 cursor-pointer">Meyve</li>
        <li className="categories-li hover:bg-pink-700 cursor-pointer">Sebze</li>
        <li className="categories-li hover:bg-pink-700 cursor-pointer">Kıyafet</li>
        <li className="categories-li hover:bg-pink-700 cursor-pointer">Elektronik</li>
        <li className="categories-li hover:bg-pink-700 cursor-pointer">Ekle</li>
        <li className="categories-li hover:bg-pink-700 cursor-pointer">Düzenle</li>


      </ul>
    </div>
  );
}

export default Categories;
