import React from "react";
import styled from "styled-components";

import config from "../config.json";

const BorderIcon = styled.a`
  background-color: ${config.white};
  border-radius: 5px;
  cursor: pointer;

  display: grid;
  justify-content: center;
  align-content: center;
`;

interface NetworkIconProps {
  className?: string;
  href: string;
  src: string;
  alt: string;
}

const NetworkIcon = (props: NetworkIconProps) => {
  return (
    <BorderIcon className={props.className} href={props.href}>
      <img style={{ width: "30px" }} src={props.src} alt={props.alt}></img>
    </BorderIcon>
  );
};

export default NetworkIcon;
