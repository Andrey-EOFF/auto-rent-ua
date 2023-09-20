import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
    color: #333;
    font-size: 24px;
  }

  a.active {
    font-weight: bold;
  }
`;

export const SidebarLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-size: 18px;

  &.active {
    font-weight: bold;
    color: #3470ff;
  }
`;
