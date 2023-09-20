import styled from "styled-components";

export const ModalContainer = styled.div`
  border-radius: 24px;
  padding: 40px;
  position: relative;
`;

export const CarImg = styled.img`
  width: 461px;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  margin-bottom: 8px;

  font-size: 18px;
`;

export const CardModal = styled.span`
  color: #3470ff;
`;

export const CarInfo = styled.div`
  width: 350px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 14px;
  span {
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
    line-height: 1, 12;
    text-align: start;
  }
  span:not(:last-child)::after {
    content: " | ";
    color: rgba(0, 0, 0, 0.1);
    margin-right: 6px;
    margin-left: 6px;
  }
`;

export const CarInfoDesc = styled.p`
  text-align: start;
  font-size: 14px;
  line-height: 1, 12;
  margin-bottom: 24px;
`;

export const CarTitleFunctional = styled.p`
  text-align: start;
  font-size: 14px;
  line-height: 1, 25;
  color: #121417;

  margin-bottom: 8px;
`;

export const CarConditions = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  padding: 0;
  height: 72px;
  margin-bottom: 24px;
`;
export const CarConditionsItem = styled.li`
  display: flex;
  text-align: center;
  justify-content: center;
  background-color: #f9f9f9;
  border-radius: 35px;
  font-size: 12px;
  margin-right: 8px;

  padding: 7px 14px 7px 14px;
`;

export const CardItemSpan = styled.span`
  color: #3470ff;
  margin-left: 4px;

  font-family: "Montserrat";
  font-weight: bold;
`;

export const ModalContent = styled.div`
  background: #fff;
  text-align: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  color: #121417;

  cursor: pointer;
  &:hover {
    color: #0b44cd;
    transition: color 0.3s ease-in-out;
  }
`;

