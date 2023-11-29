//Modal from Ant
//https://ant.design/components/modal

import React, { useState } from 'react';
import { Button, Modal } from 'antd';

import NewItemForm from '../NewItemForm';

const ModalNewItem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        + Add item
      </Button>
      <Modal title="Add item" open={isModalOpen} footer={null} onCancel={handleCancel}>
        <NewItemForm />
      </Modal>
    </>
  );
};
export default ModalNewItem;