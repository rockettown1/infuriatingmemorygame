import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";

export default function Card(props) {
  const [isFlipped, changeFlip] = useState(false);

  console.log(props.flip);
  let flipback;
  if (props.flip) {
    setTimeout(() => {
      flipback = false;
      changeFlip(false);
    }, 750);
  }

  const handleFlip = () => {
    changeFlip(!isFlipped);
    props.click(props.id, props.image);
  };

  return (
    <ReactCardFlip isFlipped={flipback || isFlipped} flipDirection="horizontal">
      <Container onClick={handleFlip}></Container>

      <ContainerBack onClick={handleFlip}>
        <Image src={props.image}></Image>
      </ContainerBack>
    </ReactCardFlip>
  );
}

const Container = styled.div`
  height: 150px;
  width: 150px;
  background-color: salmon;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border-radius: 5px;
`;

const ContainerBack = styled.div`
  height: 150px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  overflow: hidden;
  border-radius: 5px;
`;

const Image = styled.img`
  width: 150px;
`;
