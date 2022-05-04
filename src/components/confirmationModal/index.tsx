import React from "react";
import { Modal } from "antd";

type ConfirmationModalProps = {
  isVisible: boolean;
  title: string;
  content: string | React.ReactElement | React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfrimationModal = ({
  title,
  content,
  onCancel,
  onConfirm,
  isVisible,
}: ConfirmationModalProps) => {
  return (
    <Modal
      title={title}
      visible={isVisible}
      onOk={onConfirm}
      onCancel={onCancel}
    >
      {content}
    </Modal>
  );
};

export default ConfrimationModal;
