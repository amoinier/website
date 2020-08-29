import React from "react";
import styled from "styled-components";

import config from "./config.json";
import Main from "./components/Main";
import Polygon from "./components/Polygon";

const LeftPart = styled.div`
  display: grid;
  grid-template-rows: 600px auto;

  @media screen and ${config.deviceScreen.laptopL} {
    display: none;
  }
`;

const RightPart = styled.div`
  @media screen and ${config.deviceScreen.laptopL} {
    display: none;
  }
`;

const App = () => {
  return (
    <>
      <Polygon
        size="600px"
        top="500px"
        left="1500px"
        radius="20px"
        degree="45deg"
      ></Polygon>
      <Polygon
        size="300px"
        top="600px"
        right="2300px"
        radius="1000px"
        degree="0deg"
        left="0px"
        color={config.fifthColor}
      ></Polygon>
      <Polygon
        size="600px"
        top="1000px"
        left="400px"
        radius="20px"
        degree="-250deg"
        color={config.fourthColor}
        clip="polygon(0% 100%, 0% 0%, 2% 0, 100% 98%, 100% 100%)"
      ></Polygon>
      <Polygon
        size="900px"
        top="1600px"
        right="0px"
        left="0px"
        radius="1000px"
        degree="0deg"
        color={config.thirdColor}
      ></Polygon>
      <Polygon
        size="500px"
        top="1400px"
        left="1500px"
        radius="20px"
        degree="20deg"
        color={config.themeColor}
      ></Polygon>
      <LeftPart>
        <div
          style={{
            clipPath: "circle(600px at 100% 0)",
            backgroundColor: config.themeColor,
          }}
        ></div>
      </LeftPart>
      <Main />
      <RightPart></RightPart>
    </>
  );
};

export default App;
