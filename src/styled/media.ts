import { css } from "styled-components";

const breakpoints = {
  tablet: "768px",
  desktop: "1200px",
};

interface Media {
  tablet: Function;
  desktop: Function;
}

const media = Object.keys(breakpoints).reduce((acc, label) => {
  // @ts-ignore
  acc[label] = (...args) => {
    // @ts-ignore
    const rules = css(...args);

    return css`
      // @ts-ignore
      @media (min-width: ${breakpoints[label]}) {
        ${rules};
      }
    `;
  };
  return acc;
}, {}) as Media;

export { media };
