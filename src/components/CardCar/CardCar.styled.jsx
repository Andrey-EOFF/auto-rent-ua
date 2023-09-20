import styled from "styled-components";

export const CardContainer = styled.div`
  width: 274px;
  height: 426px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;
export const CardHeader = styled.div`
  width: 274px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  margin-bottom: 8px;

  font-size: 16px;
  line-height: 1.12;

`;

export const CardModal = styled.span`
  color: #3470ff;
`;

export const FavoriteButton = styled.button`
  background-color: transparent;
  font-size: 18px;
  border: none;
  position: absolute;
  top: 14px;
  right: 14px;
  color: #ffffff;

  cursor: pointer;

  &:hover {
    color: #0b44cd;
    transition: color 0.3s ease-in-out;
  }
`;

export const CarImage = styled.img`
  width: 274px;
  min-height: 268px;
  border-radius: 14px;
  object-fit: cover;
`;

export const CarDetails = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CarInfo = styled.div`
  width: 270px;
  height: 40px;
  display: flex;
  flex-wrap: wrap;
  span {
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
    line-height: 1.12;
  }
  span:not(:last-child)::after {
    content: " | ";
    color: rgba(0, 0, 0, 0.1);
    margin-right: 6px;
    margin-left: 6px;
  }
`;
