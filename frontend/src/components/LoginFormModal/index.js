// frontend/src/components/LoginFormModal/index.js
import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "./LoginForm";

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setShowModal(true);
        }}
        type="button"
        className="demo-button"
      >
        Log In
      </button>
      {showModal && (
        <Modal
          onClose={(e) => {
            setShowModal(false);
          }}
        >
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
