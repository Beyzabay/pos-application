import React from "react";
import { Modal } from "antd";
import { Form, Input, Select } from "antd";
import { Card } from "antd";
import { Button } from "antd";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <>
      <Modal
        title="Fatura Oluştur"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={false}
      >
        <Form layout="vertical">
          <Form.Item
            label="Müşteri Adı"
            name="personName"
            rules={[{ required: true, message: "Müşteri adını giriniz" }]}
          >
            <Input placeholder="Müşteri adı giriniz" />
          </Form.Item>
          <Form.Item
            label="Telefon Numarası"
            name="phoneNumber"
            rules={[{ required: true, message: "Telefon bilgisi giriniz" }]}
          >
            <Input placeholder="Telefon numarası giriniz" />
          </Form.Item>
          <Form.Item
            label="Select"
            name="paymend"
            rules={[{ required: true, message: "Ödeme yöntemi seçiniz" }]}
          >
            <Select placeholder="Ödeme Yöntemi Seçiniz">
              <Select.Option value="Nakit">Nakit</Select.Option>
              <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
            </Select>
          </Form.Item>
          <Card size="small" className="p-2">
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
            <div className="flex justify-end">
              <Button className="bg-blue-600 h-9 text-white">
                Sipariş Oluştur
              </Button>
            </div>
          </Card>
        </Form>
      </Modal>
    </>
  );
};

export default CreateBill;
