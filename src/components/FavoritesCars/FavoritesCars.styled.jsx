import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 0 auto;
  width: 1184px;
`;

export const CarList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 29px; 

  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CarItem = styled.li`
  box-sizing: border-box;
`;

export const TextTime = styled.div`
  display: flex;
  text-align: center;
  font-size: 24px;
  margin-top: 4%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  text-align: center;
  font-size: 24px;
  margin-left: 10px;

  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;