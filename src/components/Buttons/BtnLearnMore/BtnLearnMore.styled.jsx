import styled from "styled-components";
import { colors } from "../../../vars";

export const BtnStyle = styled.button`
  width: 274px;
  height: 44px;

  border: none;
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.4;
  color:#FFFF;
  background-color:${colors.primaryColor};

  cursor: pointer;
  &:hover {
    background-color:${colors.primaryHover};
    transition: background-color 0.3s ease-in-out;
 
  }
`;