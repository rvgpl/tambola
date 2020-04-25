import React from "react";
import { ThemeProvider } from "styled-components";
import { ITheme } from "../styled/default-theme";

interface ThemeProps {
  theme: ITheme;
  children:
    | React.ReactChildren
    | React.ReactChildren[]
    | JSX.Element
    | JSX.Element[];
}
const Theme = ({ theme, children }: ThemeProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { Theme };
