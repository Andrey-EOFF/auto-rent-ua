import styled from "styled-components";
import { colors } from "../../../vars"; 

export const StyledLinkButton = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 12px 50px;
  font-size: 14px;
  line-height: 1.4;
  color: #FFFFFF;
  background-color:${colors.primaryColor};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color:${colors.primaryHover};
    transition: color 0.3s ease-in-out;
  }
`;