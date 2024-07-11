import React from "react";
import { Table } from "antd";
import { Card } from "antd";
import { Button } from "antd";
import { useState } from "react";
import BillDetails from "../Components/BillDetails";

function Customers() {

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <div>
      <h1 className="pt-5 font-bold text-3xl">Müşteriler</h1>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        className="m-6"
        bordered
      />
    </div>
  );
}

export default Customers;

