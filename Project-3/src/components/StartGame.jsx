import React from "react";
import styled from "styled-components";

const StartGame = ({ toggleGamePage }) => {
  return (
    <Container>
      <img src="/dices.png" alt="Multiple dices" />
      <div className="game-content">
        <h1>DICE GAME</h1>
        <Button onClick={toggleGamePage}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  max-width: 1180px;

  .game-content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
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
