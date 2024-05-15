import React from "react";
import { Flex, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Badge, Space } from 'antd';
import {
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  BarChartOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

function Header() {
  return (
    <div className="header border-b">
      <div className="logo text-3xl py-4 px-4 font-bold m-3">LOGO</div>
      <div className="search sm:flex md:flex lg:flex xl:flex mx-12">
        <Input
          className="search-input md:w-6/6 w-full"
          placeholder="Search"
          prefix={<SearchOutlined />}
        />
      </div>
      <div className="menu-links justify-center z-50 md:gap-7 gap-1 md:static fixed bottom-0 md:w-auto w-screen md:bg-transparent bg-white justify-around md:border-t-0 border-t-2" style={{ display: "flex" }}>
        <div className="hover:text-[#40a9ff]">
          <a href="/" className="positionClass">
            <HomeOutlined className="md:text-2xl text-xl"/>
            <span className="md:text-xs text[10px]">Ana{'\u00A0'}Sayfa</span>
          </a>
        </div>
        <div className="hover:text-[#40a9ff] md:flex hidden">
       <Badge count={5}>
          <a href="/" className="positionClass">
            <ShoppingCartOutlined className="md:text-2xl text-xl"/>
            <span className="md:text-xs text[10px]">Sepet</span>
          </a>
        </Badge>
        </div>
        <div className="hover:text-[#40a9ff] ">
          <a href="/" className="positionClass">
            <CopyOutlined className="md:text-2xl text-xl"/>
            <span className="md:text-xs text[10px]">Faturalar</span>
          </a>
        </div>
        <div className="hover:text-[#40a9ff] ">
          <a href="/" className="positionClass">
            <UserOutlined className="md:text-2xl text-xl"/>
            <span className="md:text-xs text[10px]">Müşteriler</span>
          </a>
        </div>
        <div className="hover:text-[#40a9ff] ">
          <a href="/" className="positionClass">
            <BarChartOutlined className="md:text-2xl text-xl"/>
            <span className="md:text-xs text[10px]">İstatistikler</span>
          </a>
        </div>
        <div className="hover:text-[#40a9ff] ">
          <a href="/" className="positionClass">
            <LogoutOutlined className="md:text-2xl text-xl"/>
            <span className="md:text-xs text[10px]">Çıkış</span>
          </a>
        </div>
      </div>
      <div className="hover:text-[#40a9ff] shopping-icon-2 md:hidden flex">
       <Badge count={5}>
          <a href="/" className="positionClass">
            <ShoppingCartOutlined className="md:text-2xl text-xl"/>
            <span className="md:text-xs text[10px]">Sepet</span>
          </a>
        </Badge>
        </div>
    </div>
  );
}

export default Header;
