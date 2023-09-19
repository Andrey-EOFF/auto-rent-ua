
import { useEffect } from "react";
import { ModalBackdrop, ModalContent } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

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

  return (
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        <div>{children}</div>
      </ModalContent>
    </ModalBackdrop>
  );
}
