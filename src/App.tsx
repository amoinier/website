import config from "./config.json";
import Main from "./components/Main";
import { LeftPart, RightPart } from "./styles/AppStyles";
import BackgroundShapes from "./components/BackgroundShapes";

function App() {
  return (
    <>
      <BackgroundShapes />
      <LeftPart>
        <div
          style={{
            clipPath: "circle(600px at 100% 0)",
            backgroundColor: config.themeColor,
          }}
        />
      </LeftPart>
      <Main />
      <RightPart />
    </>
  );
}

export default App;
