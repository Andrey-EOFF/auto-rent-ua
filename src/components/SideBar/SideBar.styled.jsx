import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../../vars";

export const SideBarNav = styled.nav`
  display: flex;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  max-width: 1184px;
  background-color: rgba(0, 0, 0, 0.1);
  padding-top: 10px;
  padding-bottom: 10px;

  border-radius: 5px;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: space-evenly;
    width: 100%;
    height: 60px;
    align-items: center;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }

  a {
    text-decoration: none;
    color: ${colors.textColor};
    font-size: 24px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 470px;
    flex-direction: column;
  }
`;

export const SidebarLink = styled(NavLink)`
  margin: 0;
  text-decoration: none;
  color: #333;
  font-size: 18px;

  &:hover {
    color: ${colors.primaryHover};
    transition: color 0.3s ease-in-out;
  }

  &.active {
    font-weight: bold;
    color: #3470ff;
  }
`;
