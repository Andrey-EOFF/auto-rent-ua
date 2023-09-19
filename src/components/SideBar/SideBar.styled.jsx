import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SideBarNav = styled.nav`
  margin-bottom: 20px;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: space-evenly;
  }

  a {
    text-decoration: none;
    color: #333;
    font-size: 18px;
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
