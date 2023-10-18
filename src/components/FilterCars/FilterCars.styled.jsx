import styled from "styled-components";
import { colors } from "../../vars";

export const FilterContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  align-items: flex-end;
  justify-content: center;
  max-width: 1184px;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    align-items: stretch;
    flex-direction: column;
    padding: 0 25px;
  }
`;

export const FilterBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 18px;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;
export const Label = styled.label`
  color: #8a8a89;
  font-size: 14px;
  line-height: 1.2;
`;

export const Option = styled.option`
  background-color: #ffff;
  padding: 14px auto 14px 18px;
  border-radius: 14px;
  border: 1px solid red;
`;

export const FilterBlockMil = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Select = styled.select`
  display: flex;
  padding: 14px 18px;
  background-color: #f7f7fb;
  margin-top: 8px;
  font-size: 18px;
  line-height: 1.1;
  border-radius: 14px;
  border: none;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;


export const InputMil = styled.div`
  display: flex;
`;

export const Input = styled.input`
  width: 160px;
  padding: 14px 18px;
  background-color: #f7f7fb;
  margin-top: 8px;
  font-size: 18px;
  line-height: 1.1;
  border-radius: 14px;
  border: none;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  height: 48px;
  padding: 14px 44px;
  margin-left: 18px;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.4;
  color: #ffff;
  background-color: ${colors.primaryColor};

  cursor: pointer;
  &:hover {
    background-color: ${colors.primaryHover};
    transition: background-color 0.3s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;
