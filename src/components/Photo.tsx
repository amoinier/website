import React from "react";
import styled from "styled-components";

import config from "../config.json";

const Border = styled.div`
  display: grid;

  padding: 10px;
  border-radius: 5px;
  background-color: ${config.white};
`;

const Image = styled.div`
  border-radius: 5px;
  background-image: url("../../profile.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

function Photo() {
  return (
    <>
      <Border>
        <Image></Image>
      </Border>
    </>
  );
}

export default Photo;
