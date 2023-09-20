import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../../vars"; 

export const SideBarNav = styled.nav`
  display: flex;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  width: 1184px;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: space-evenly;
    background-color: rgba(0, 0, 0, 0.1);
    height: 60px;
    align-items: center;
    width: 1184px;
  }

  a {
    text-decoration: none;
    color: ${colors.textColor};
    font-size: 24px;
  }


  
`;

export const SidebarLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-size: 18px;

  &:hover{
    color: ${colors.primaryHover};
    transition: color 0.3s ease-in-out;
  }


  &.active {
    font-weight: bold;
    color: #3470ff;
  }
`;
