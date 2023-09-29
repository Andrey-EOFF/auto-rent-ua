import styled from "styled-components";
import { colors } from "../../vars";

export const FilterContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  align-items: flex-end;
  justify-content: center;
  width: 1184px;
  margin-bottom: 50px;
`;

export const FilterBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 18px;
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
`;
