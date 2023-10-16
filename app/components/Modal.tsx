import { useEffect } from "react";

interface ModalProps {
  modalOpen: boolean;
  setModelOpen: (open: boolean) => boolean | void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModelOpen, children }) => {
  useEffect(() => {
    document.addEventListener("keydown", (detectKeyDown) => {
      const key = detectKeyDown.key;

      if (key === "Escape") setModelOpen(false);
    });
  });

  return (
    <dialog className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <button
          onClick={() => setModelOpen(!modalOpen)}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
