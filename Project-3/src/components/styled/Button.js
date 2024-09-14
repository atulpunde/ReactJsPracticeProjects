import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 18px;
  width: 220px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: white;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;

  &:hover {
    background-color: black;
    color: white;
    transition: 0.3s background ease-in;
  }
`;
