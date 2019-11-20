import React from "react";
import Card from "./Card";
import styled from "styled-components";

export default function Cards(props) {
  return (
    <Board>
      {props.pics.map((card, index) => {
        return (
          <Card
            key={index}
            image={card}
            id={index}
            click={props.click}
            flip={props.flip}
          />
        );
      })}
    </Board>
  );
}

const Board = styled.div`
  max-width: 750px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
