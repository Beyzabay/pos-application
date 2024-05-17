import React from "react";
import { Modal } from "antd";

const BillDetails = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <>
      <Modal
        title="Fatura Oluştur"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={false}
      >
       <div>Fatura detay</div>
      </Modal>
    </>
  );
};

export default BillDetails;
