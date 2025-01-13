import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 16px;
`;

export const Link = styled.a`
  font-size: 16px;
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
     color: #0078d4;
  }
`;
