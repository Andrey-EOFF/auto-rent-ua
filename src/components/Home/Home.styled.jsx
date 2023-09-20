import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1184px;
  margin: 0 auto;
  padding: 20px;
`;

export const Header = styled.h1`
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

export const Image = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  margin: 0 20px;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;

export const TextTime = styled.h3`
    text-align: center;
    font-size: 24px;
    margin-top: 4%;
`

export const StyledNavLink = styled(NavLink)`
  display: block;
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;

