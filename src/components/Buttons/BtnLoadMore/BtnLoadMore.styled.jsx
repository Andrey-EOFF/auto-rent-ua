import styled from "styled-components";
import { colors } from "../../../vars"; 

export const BtnLoadMoreStyle = styled.button`
  background: none;
  border: none;
  color: ${colors.primaryColor};
  font-size: 16px;
  line-height: 1.25;
  text-decoration: underline #3470ff;
  cursor: pointer;

  &:hover {
    color: ${colors.primaryHover};
    transition: color 0.3s ease-in-out;
  }
`;
