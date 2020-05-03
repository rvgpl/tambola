import React from "react";
import styled from "styled-components";

const Ticket = ({
  ticket,
  ticketNo,
}: {
  ticket: number[][];
  ticketNo: string;
}) => {
  return (
    <TicketWrapper>
      <TicketMeta>{ticketNo}</TicketMeta>
      <Table>
        <tbody>
          {ticket.map((row: number[]) => (
            <tr>
              {row.map((col) => (
                <td>{col === 0 ? null : col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </TicketWrapper>
  );
};

export default Ticket;

const TicketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

const TicketMeta = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: ${(props) => props.theme.font.m};
  font-family: ${(props) => props.theme.font.family};
  text-transform: uppercase;
`;

const Table = styled.table`
  font-family: ${(props) => props.theme.font.family};
  border-collapse: collapse;
  td {
    height: 32px;
    width: 32px;
    text-align: center;
    border: 1px solid #555;
    font-size: 1.1rem;
    font-weight: bold;
  }
`;
