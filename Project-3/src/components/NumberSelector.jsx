import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = () => {
  const diceNumbers = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();

  console.log(selectedNumber);

  return (
    <NumberSelectorContainer>
      <div className="flex">
        {diceNumbers.map((value, index) => {
          return (
            <Box
              key={index}
              isSelected={value === selectedNumber}
              onClick={() => setSelectedNumber(value)}
            >
              {value}
            </Box>
          );
        })}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  display: grid;
  place-items: center;
  color: black;
  font-size: 24px;
  font-weight: 700;
  border: 1px solid black;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
