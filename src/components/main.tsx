import React, { Fragment } from "react";
import styled from "styled-components";
import AnimatedNumber from "react-animated-number";
import { media } from "../styled/media";

const Main = ({ prevNumber, currentNumber, generateNumber, gameOver }: any) => {
  return (
    <Fragment>
      <Title>Tambola Number Generator</Title>
      <Container>
        {gameOver && (
          <GameOver onClick={() => window.location.reload()}>
            Game Over. New Game?
          </GameOver>
        )}
        {!gameOver && (
          <NumbersContainer>
            <CurrentNumberContainer>
              <AnimatedNumber
                component={CurrentNumber}
                initialValue={prevNumber}
                value={currentNumber}
                stepPrecision={0}
                style={{
                  transition: "0.8s ease-out",
                  transitionProperty: "background-color, color, opacity",
                }}
                duration={300}
              />
              <PrimaryButton onClick={() => generateNumber()}>
                Generate Number
              </PrimaryButton>
            </CurrentNumberContainer>
            <PreviousNumberContainer>
              <PreviousNumber>
                Previous Number <span>{prevNumber}</span>
              </PreviousNumber>
            </PreviousNumberContainer>
          </NumbersContainer>
        )}
      </Container>
    </Fragment>
  );
};
export { Main };

const Container = styled.div`
  background-color: ${(props) => props.theme.color.primary1};
  padding: 50px 20px;
  display: grid;
  place-items: center;
  min-height: 350px;
`;

const PrimaryButton = styled.button`
  position: relative;
  font-weight: bold;
  text-transform: uppercase;
  padding: 16px 32px;
  font-size: ${(props) => props.theme.font.xl};
  background-color: ${(props) => props.theme.color.primary2};
  color: ${(props) => props.theme.color.mono1};
  font-family: inherit;
  outline: none;
  border: none;
  cursor: pointer;
  z-index: 1;
  overflow: hidden;
  width: 100%;
  max-width: 100%;

  ${media.tablet`
	font-size: ${(props: any) => props.theme.font.l};
	max-width: 300px;
	`}

  &::before {
    background: ${(props) => props.theme.color.primary1};
    content: "";
    position: absolute;
    z-index: -1;
    height: 100%;
    left: 0;
    top: 0;
    width: 100%;
    transform: translateY(-100%);
    transition: transform 0.3s ease;
    border: 2px solid ${(props) => props.theme.color.primary2};
  }

  &:hover {
    color: ${(props) => props.theme.color.primary2};

    &::before {
      transform: translateY(0);
    }
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: ${(props) => props.theme.font.big};
  line-height: 2;
`;

const CurrentNumber = styled.h3`
  font-size: 150px;
  min-height: 160px;
  margin: 16px 0;
`;

const GameOver = styled.h3`
  font-size: ${(props) => props.theme.font.big};
`;

const NumbersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  width: 100%;

  ${media.tablet`
	grid-template-columns: 2fr 1fr;
  grid-gap: 16px;
`}
`;

const CurrentNumberContainer = styled.div``;

const PreviousNumberContainer = styled.div`
  border: 5px solid ${(props) => props.theme.color.primary2};
  display: flex;
  align-items: flex-end;
`;

const PreviousNumber = styled.h3`
  margin: 0;
  display: flex;
  flex-direction: column;
  padding: 16px;
  font-size: ${(props) => props.theme.font.xxl};

  span {
    font-size: 48px;
    line-height: 1;
    min-height: 48px;
  }
`;
