import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Icon, StyledButtonUp } from "./BtnUp.styled";

export default function BtnUp() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return ReactDOM.createPortal(
    showButton && (
      <StyledButtonUp onClick={scrollToTop}>
        <Icon />
      </StyledButtonUp>
    ),
    document.getElementById("modal-root")
  );
}
