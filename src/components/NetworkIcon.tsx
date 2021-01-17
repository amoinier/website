import styled from "styled-components";

import config from "../config.json";

const BorderIcon = styled.a`
  height: max-content;
  background-color: ${config.white};
  border-radius: 5px;
  cursor: pointer;
  padding: 16px;

  display: grid;
  justify-content: center;
  align-content: center;

  @media screen and ${config.deviceScreen.laptop} {
    padding: 8px;
  }
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
