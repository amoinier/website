import styled from "styled-components";

import config from "../config.json";

const TextSpan = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: ${config.white};
`;

interface InfoTextProps {
  className?: string;
  children: string;
}

function InfoText(props: InfoTextProps) {
  return <TextSpan className={props.className}>{props.children}</TextSpan>;
}

export default InfoText;
