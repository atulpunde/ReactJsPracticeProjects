import React from "react";
import styled from "styled-components";
import { Button } from "./styled/Button";

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
