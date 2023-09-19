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
`;

export const CarItem = styled.li`
  box-sizing: border-box;
`;