import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditReviewForm from "./EditReviewForm";

const EditReviewModal = ({ review }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="newlisting-button" onClick={() => setShowModal(true)}>
        Edit
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditReviewForm
            closeModal={() => setShowModal(false)}
            review={review}
          />
        </Modal>
      )}
    </>
  );
};

export default EditReviewModal;
