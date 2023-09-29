import styled from "styled-components";
import { colors } from "../../vars";

export const FilterContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const FilterBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 18px;
`;
export const FilterBlockMil = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Select = styled.select`
  display: flex;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  font-size: 16px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-top: 10px;
  font-size: 16px;
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
