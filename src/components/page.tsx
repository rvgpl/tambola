import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Theme } from "../context/theme";
import { defaultTheme } from "../styled/default-theme";
import { GlobalStyle } from "../styled/global";

const Page: FunctionComponent = ({ children }) => {
  return (
    <Theme theme={defaultTheme}>
      <GlobalStyle />
      <Header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tickets">Tickets</Link>
            </li>
            <li>
              <Link to="/numbers">Numbers</Link>
            </li>
          </ul>
        </nav>
      </Header>
      <Container>{children}</Container>
      <Footer>
        Built with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by <a href="http://rvgpl.xyz">Ravigopal Kesari</a>
      </Footer>
    </Theme>
  );
};

const Container = styled.div`
  height: 100%;
  min-height: 85vh;
`;
const Header = styled.header`
  padding: 16px 0;
  font-family: ${(props) => props.theme.font.family};
  min-height: 32px;
  background-color: black;
  color: white;
  font-size: ${(props) => props.theme.font.xl};

  a {
    color: currentColor;
    text-decoration: none;
  }

  a:hover {
    text-decoration: line-through;
  }
  nav {
    margin: 0;
    padding: 0;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  li {
    margin: 0 16px;
  }

  @media print {
    display: none;
  }
`;
const Footer = styled.footer`
  padding: 5px 0;
  font-family: ${(props) => props.theme.font.family};
  text-align: center;
  min-height: 16px;
  background-color: black;
  color: white;
  font-size: ${(props) => props.theme.font.xs};

  a {
    color: currentColor;
  }

  @media print {
    display: none;
  }
`;

export default Page;
