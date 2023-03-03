import sum from "hash-sum";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getTickets from "../get-tickets";
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
      <Button onClick={() => setTickets([getTickets(6), getTickets(6)])}>
        New Ticket
      </Button>
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

const TicketsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

const TicketsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.color};
  max-width: 700px;
  margin: 30px auto;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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
