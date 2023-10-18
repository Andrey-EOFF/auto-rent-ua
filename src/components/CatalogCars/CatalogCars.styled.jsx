import styled from "styled-components";


export const Section = styled.section`
    min-width: 1184px;
    width: 100%;
   
    margin-left: auto;
    margin-right: auto;
`;

export const CardContainer = styled.div`
    min-width: 1184px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
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
