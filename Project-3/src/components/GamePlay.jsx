import React from "react";
import GameScore from "./GameScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";

const GamePlay = () => {
  return (
    <MainContainer>
      <div className="top_section">
        <GameScore />
        <NumberSelector />
      </div>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;

  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
