import React from "react";
import StatisticsCard from "../Components/StatisticsCard";
import StatisticsPie from "../Components/StatisticsPie";

function Statistics() {
  return (
    <div className="overflow-y-scroll overflow-x-hidden">
      <h1 className="pt-5 font-bold text-3xl">İstatistikler</h1>
      <div>
        <h1 className="text-left pl-10 text-xl">
          Hoşgeldin <span className="text-green-600">admin</span>
        </h1>
      </div>

      <div class="flex flex-row flex-wrap w-full sm:gap-10 gap-4 m-2 sm:m-10 justify-center">
        <div class="flex flex-row items-center p-4 gap-8 bg-gray-800 w-64">
          <div className="pl-4">
            <img
              class="w-14 h-14 mb-3 rounded-full shadow-lg"
              src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?w=740"
            />
          </div>
          <div className="flex flex-col">
            <h5 class="mb-1 text-base font-medium text-gray-300">Toplam müşteri</h5>
            <p className="text-white">6</p>
          </div>
        </div>
        <div class="flex flex-row items-center p-4 gap-8 bg-slate-800 w-64">
          <div className="pl-4">
            <img
              class="w-14 h-14 mb-3 p-2 rounded-full shadow-lg bg-white"
              src="https://cdn-icons-png.freepik.com/512/82/82479.png"
            />
          </div>
          <div className="flex flex-col">
            <h5 class="mb-1 text-base font-medium text-gray-300">Toplam Kazanç</h5>
            <p className="text-white">660.96₺</p>
          </div>
        </div>
        <div class="flex flex-row items-center p-4 gap-8 bg-slate-800 w-64">
          <div className="pl-4">
          <img
              class="w-14 h-14 mb-3 p-2 rounded-full shadow-lg bg-white"
              src="https://cdn-icons-png.freepik.com/512/151/151387.png"
            />
          </div>
          <div className="flex flex-col">
            <h5 class="mb-1 text-base font-medium text-gray-300">Toplam Satış</h5>
            <p className="text-white">6</p>
          </div>
        </div>
        <div class="flex flex-row items-center p-4 gap-8 bg-slate-800 w-64">
          <div className="pl-4">
          <img
              class="w-14 h-14 mb-3 p-2 rounded-full shadow-lg bg-white"
              src="https://cdn-icons-png.freepik.com/512/13368/13368825.png?ga=GA1.1.1800090308.1701931946"
            />
          </div>
          <div className="flex flex-col">
            <h5 class="mb-1 text-base font-medium text-gray-300">Toplam Ürün</h5>
            <p className="text-white">6</p>
          </div>
        </div>
      </div>
        <div className="flex sm:flex-row flex-col items-center">
        <div className="w-2/4 h-72">
        <StatisticsCard/>
        </div>
        <div className="w-2/4 h-72">
            <StatisticsPie/>
        </div>
        </div>
    </div>
    
  );
}

export default Statistics;
