import React from "react";
import styled from "styled-components";

const GameScore = ({ score }) => {
  return (
    <ScoreBoard>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreBoard>
  );
};

export default GameScore;

const ScoreBoard = styled.div`
  max-width: 200px;
  text-align: center;

  h1 {
    font-size: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;
