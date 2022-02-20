import styled from "styled-components";

import config from "../config.json";

const TitleText = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: ${config.black};
  justify-self: center;
  align-self: center;
  font-family: "Helvetica", serif;
`;

interface TitleProps {
  style?: object;
  children: string;
}

function Title(props: TitleProps) {
  return <TitleText style={props.style}>{props.children}</TitleText>;
}

export default Title;
