import { useEffect } from "react";
import ReactDOM from "react-dom";
import { ModalBackdrop, ModalContent } from "./Modal.styled";

export default function Modal ({ children, toggleModal }) {
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        toggleModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleModal]);

  return ReactDOM.createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        <div>{children}</div>
      </ModalContent>
    </ModalBackdrop>,
    document.getElementById("modal-root")
  );
}
