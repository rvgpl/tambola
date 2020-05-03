import React, { useState } from "react";
import { Main } from "./main";
import { NumberGrid } from "./number-grid";
import styled from "styled-components";
import random from "lodash.random";

interface IState {
  prevNumber: null | number;
  currentNumber: null | number;
  pickedNumbers: number[];
}

const NumberGen = () => {
  const [state, setState] = useState<IState>({
    prevNumber: null,
    currentNumber: 0,
    pickedNumbers: [],
  });

  const generateNumber = () => {
    const randomNumber = random(1, 90);
    if (state.pickedNumbers.includes(randomNumber)) {
      generateNumber();
    } else {
      setState({
        prevNumber: state.currentNumber,
        currentNumber: randomNumber,
        pickedNumbers: [...state.pickedNumbers, randomNumber],
      });
    }
  };
  return (
    <Wrapper>
      <Main
        prevNumber={state.prevNumber}
        currentNumber={state.currentNumber}
        generateNumber={generateNumber}
        gameOver={state.pickedNumbers.length === 90}
      />
      <NumberGrid pickedNumbers={state.pickedNumbers} />
    </Wrapper>
  );
};

export default NumberGen;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  color: ${(props) => props.theme.color.mono4};
  margin: 0 auto;
  padding: 0 16px;
  font-family: ${(props) => props.theme.font.family};
`;
