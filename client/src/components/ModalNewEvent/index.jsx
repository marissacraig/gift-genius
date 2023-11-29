//Modal from Ant
//https://ant.design/components/modal

import React, { useState } from 'react';
import { Button, Modal } from 'antd';

import NewEventForm from '../NewEventForm';

const ModalNewEvent = () => {
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
        + Create new list
      </Button>
      <Modal title="Create a new list" open={isModalOpen} footer={null} onCancel={handleCancel}>
        <NewEventForm />
      </Modal>
    </>
  );
};
export default ModalNewEvent;