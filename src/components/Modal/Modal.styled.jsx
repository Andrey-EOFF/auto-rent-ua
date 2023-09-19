
import styled from "styled-components";

export const ModalBackdrop = styled.div`
 position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

export const ModalContent = styled.div`
   position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  width: min-content;
  height: min-content;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background:#FFFF;
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
`;
