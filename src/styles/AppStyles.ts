import styled from "styled-components";
import config from "../config.json";

export const LeftPart = styled.div`
  display: grid;
  grid-template-rows: 600px auto;

  @media screen and ${config.deviceScreen.laptopL} {
    display: none;
  }
`;

export const RightPart = styled.div`

  @media screen and ${config.deviceScreen.laptopL} {
    display: none;
  }
`;
