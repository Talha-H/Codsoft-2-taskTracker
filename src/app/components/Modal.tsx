import React, { Children } from "react";
interface ModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ openModal, setOpenModal, children }) => {
  return (
    <>
      <dialog className={`modal ${openModal ? "modal-open" : "modal-closed"}`}>
        <div className="modal-box ">
          <div>
            <button
              onClick={() => setOpenModal(false)}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            {children}
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
