import styled from "styled-components";

export const StyledButtonUp = styled.div`
  position: fixed;
  background-color:#3470FF;
  right: 50%;
  bottom: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 50px;
`;

export const Icon = styled.div`
  content: "";
  width: 40px;
  height: 40px;
  background: transparent no-repeat center center;
  background-size: 100% 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23fff' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'/%3E%3C/svg%3E");
`;
