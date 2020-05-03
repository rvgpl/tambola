import React from "react";
import getTickets from "../get-tickets";

const TicketGenerator = () => {
  const tickets = getTickets(6);
  console.log("tickets", tickets);
  return <h1>Tickets</h1>;
};

export default TicketGenerator;
