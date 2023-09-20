import styled from "styled-components";


export const CardContainer = styled.div`
  margin: 0 auto;
  width: 1184px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const CarList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 29px; 

  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 100px;
  position: relative;
`;

export const CarItem = styled.li`
  box-sizing: border-box;
`;



export const NoMoreCarsText = styled.p`
  text-align: center;
  font-size: 24px;
`;