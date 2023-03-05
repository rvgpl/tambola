import sum from "hash-sum";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getTickets from "../get-tickets";
import { media } from "../styled/media";
import Ticket from "./ticket";

const colors = [
  "azure",
  "honeydew",
  "lavenderblush",
  "ivory",
  "aliceblue",
  "seashell",
];

const TicketGenerator = () => {
  const [tickets, setTickets] = useState([getTickets(6), getTickets(6)]);
  const [color, setColor] = useState(colors[1]);

  useEffect(() => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  }, [tickets]);

  return (
    <Container>
      <ButtonsContainer>
        <Button onClick={() => setTickets([getTickets(6), getTickets(6)])}>
          New Ticket
        </Button>
        <Button onClick={() => window.print()}>Print Tickets</Button>
      </ButtonsContainer>
      <TicketsWrapper>
        <TicketsContainer color={color}>
          {tickets[0].map((ticket, idx) => (
            <Ticket ticket={ticket} key={idx} ticketNo={sum(ticket)} />
          ))}
        </TicketsContainer>
        <TicketsContainer color={color}>
          {tickets[1].map((ticket, idx) => (
            <Ticket ticket={ticket} key={idx} ticketNo={sum(ticket)} />
          ))}
        </TicketsContainer>
      </TicketsWrapper>
    </Container>
  );
};

export default TicketGenerator;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 32px;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;

  ${media.tablet`
  max-width: 700px;
  `}
`;

const TicketsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.tablet`
    flex-direction: row;
    gap: 32px;
    width: 100%;
    justify-content: space-between;
    max-width: 700px;
`}

  @media print {
    flex-direction: row;
    gap: 32px;
    width: 100%;
    justify-content: space-between;
    max-width: 600px;
  }
`;

const TicketsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.color};
  max-width: 700px;
  gap: 24px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  @media print {
    box-shadow: none;
  }
`;

const Button = styled.button`
  margin: 16px 0;
  background-color: ${(props) => props.theme.color.secondary1};
  color: white;
  border: none;
  padding: 8px 16px;
	font-size: ${(props) => props.theme.font.m};
	font-family: ${(props) => props.theme.font.family}
  cursor: pointer;
  letter-spacing: 1px;
  outline: none;
  width: 100%;
  max-width: 200px;
  
  @media print {
      display: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
