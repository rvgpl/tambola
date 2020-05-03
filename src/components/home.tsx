import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Title>Tambola Game</Title>
      <Desc>
        Tools for playing Tambola game, you can generate tickets and use number
        generator to play
      </Desc>
      <ButtonContainer>
        <Button>
          <StyledLink to="/tickets">Tickets</StyledLink>
        </Button>
        <Button>
          <StyledLink to="/numbers">Numbers</StyledLink>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Home;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.font.family};
  max-width: 800px;
  margin: 100px auto;
`;

const Title = styled.h1`
  font-size: 300%;
  margin: 0;
  font-family: inherit;
`;

const Desc = styled.h3`
  margin: 16px 0;
  font-weight: normal;
  font-size: ${(props) => props.theme.font.xl};
  max-width: 600px;
  font-family: inherit;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: inherit;
`;

const Button = styled.button`
  text-transform: uppercase;
  background-color: ${(props) => props.theme.color.secondary1};
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: ${(props) => props.theme.font.xl};
  margin: 0 16px;
  font-weight: bold;
  cursor: pointer;
  letter-spacing: 1px;
  outline: none;
`;
