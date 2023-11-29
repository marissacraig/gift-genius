//Modal from Ant
//https://ant.design/components/modal

import React, { useState } from 'react';
import { Button, Modal } from 'antd';

import UpdateItemForm from '../UpdateItemForm';

const ModalUpdateItem = ( {item} ) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="secondary" onClick={showModal}>
        Edit
      </Button>
      <Modal title="Edit item" open={isModalOpen} footer={null} onCancel={handleCancel}>
        <UpdateItemForm item={item} />
      </Modal>
    </>
  );
};
export default ModalUpdateItem;