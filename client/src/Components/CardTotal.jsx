import { Button } from "antd";
import React from "react";
import {
  ClearOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

function CardTotal() {
  return (
    <div className="h-full flex flex-col max-h-[calc(100vh-110px)]">
      <h2 className="bg-blue-600 text-white py-4 flex justify-center md:-mt-[16px]">
        Sepetteki ürünler
      </h2>
      <ul className="card-item mt-1 overflow-x-auto">
        <li className="flex justify-between">
          <div className="flex">
            <div className="m-1">
              <img
                src="https://cdn.yemek.com/mncrop/940/625/uploads/2018/02/arnavut-cilegi.jpg"
                className="h-12 w-12 object-cover"
                alt=""
              />
            </div>
            <div className="flex flex-col m-1 text-sm justify-center">
              <span className="font-bold">Çilek</span>
              <span>12₺x2</span>
            </div>
          </div>
          <div className="m-1 flex items-center">
            <Button
              className="m-1 bg-blue-600 text-white !rounded-full !w-5 h-5"
              icon={<PlusCircleOutlined />}
            />
            <span className="mt-1 font-bold">3</span>
            <Button
              className="m-1 bg-blue-600 text-white !rounded-full !w-5 h-5"
              icon={<MinusCircleOutlined />}
            />
          </div>
        </li>
      </ul>
      <div className="results mt-auto">
        <div className="subTotalDiv font-bold border">
          <div className="flex justify-between m-1">
            <div className="subTotal">Ara Toplam</div>
            <p>120 ₺</p>
          </div>
          <div className="flex justify-between m-1">
            <div className="kdv text-red-500">KDV %8</div>
            <div className="text-red-500">+7,50</div>
          </div>
        </div>
        <div className="price font-bold border flex justify-between">
          <div className="m-1 text-green-600">Genel Toplam</div>
          <div className="m-1">127,50₺</div>
        </div>
        <div className="buttons flex flex-col">
          <Button className="m-1 bg-blue-600 text-white">
            Sipariş Oluştur
          </Button>
          <Button
            className=" bg-red-600 text-white md:m-1 mb-8"
            icon={<ClearOutlined />}
          >
            Temizle
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CardTotal;
