import React, { useState } from "react";
import styled from "styled-components";
import { Button, OutlineButton } from "./styled/Button";

const RollDice = ({
  currentDice,
  rollsDice,
  resetScore,
  showRules,
  setShowRules,
}) => {
  return (
    <DiceContainer>
      <div className="dice">
        <img
          src={`/dice_${currentDice}.png`}
          alt="Dice image"
          onClick={rollsDice}
        />
        <p>Click on Dice to roll</p>
        <div className="btns">
          <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
          <Button onClick={() => setShowRules(!showRules)}>
            {showRules ? "Hide" : "Show"} Rules
          </Button>
        </div>
      </div>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    max-width: 220px;
    gap: 10px;
  }
`;
