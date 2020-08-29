import React from "react";
import styled from "styled-components";

import config from "../config.json";

const TextSpan = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: ${config.white};
`;

interface InfoTextProps {
  children: string;
}

const InfoText = (props: InfoTextProps) => {
  return <TextSpan>{props.children}</TextSpan>;
};

export default InfoText;