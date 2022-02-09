import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditListingForm from "./index";

const PropertyFormModal = ({ listing }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit Listing</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditListingForm
            closeModal={() => setShowModal(false)}
            listing={listing}
          />
        </Modal>
      )}
    </>
  );
};

export default PropertyFormModal;
