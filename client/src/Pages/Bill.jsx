import React from "react";
import { Table } from "antd";
import { Card } from "antd";
import { Button } from "antd";
import { useState } from "react";
import BillDetails from "../Components/BillDetails";

function Bill() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <h1 className="pt-5 font-bold text-3xl">Faturalar</h1>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        className="m-6"
        bordered
      />
      <div className="flex justify-end m-6">
        <Card size="small" className="w-72 p-2">
          <div className="flex justify-between">
            <div>Ara Toplam</div>
            <span>200₺</span>
          </div>
          <div className="flex justify-between my-4">
            <div>KDV Toplam %8</div>
            <span className="text-red-600">+10₺</span>
          </div>
          <div className="flex justify-between font-bold mb-2">
            <div>Toplam</div>
            <span>210₺</span>
          </div>
          <Button
            type="primary" size="large" className="w-full"
            onClick={() => setIsModalOpen(true)}
          >
            Yazdır
          </Button>
        </Card>
      </div>
      <BillDetails isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

export default Bill;
