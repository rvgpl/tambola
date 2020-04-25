import React from "react";
import styled from "styled-components";
import { media } from "../styled/media";

const NumberGrid = ({ pickedNumbers }: { pickedNumbers: number[] }) => {
  const allNumbers = Array.from(Array(90), (_, i) => i + 1);
  return (
    <Grid>
      {allNumbers.map((number, index) => {
        return pickedNumbers.includes(number) ? (
          <GridItem key={index} isPicked={true}>
            {number}
          </GridItem>
        ) : (
          <GridItem key={index} isPicked={false} />
        );
      })}
    </Grid>
  );
};

export { NumberGrid };

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(18, 48px);
  grid-gap: 12px;
  margin: 20px 0;

  ${media.tablet`
	grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(9, 48px);
	`}
`;

interface GridItemProps {
  isPicked: boolean;
}
const GridItem = styled.div<GridItemProps>`
  font-size: ${(props) => props.theme.font.xxl};
  font-weight: bold;
  line-height: 1.5;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${(props) =>
    props.isPicked
      ? props.theme.color.secondary1
      : props.theme.color.secondary2};
`;
