import Polygon from "./Polygon";
import config from "../config.json";

const shapes = [
  { size: "600px", top: "500px", left: "1500px", radius: "20px", degree: "45deg" },
  { size: "300px", top: "600px", right: "2300px", radius: "1000px", degree: "0deg", left: "0px", color: config.fifthColor },
  { size: "600px", top: "1000px", left: "400px", radius: "20px", degree: "-250deg", color: config.fourthColor, clip: "polygon(0% 100%, 0% 0%, 2% 0, 100% 98%, 100% 100%)" },
  { size: "900px", top: "1600px", right: "0px", left: "0px", radius: "1000px", degree: "0deg", color: config.thirdColor },
  { size: "500px", top: "1400px", left: "1500px", radius: "20px", degree: "20deg", color: config.themeColor },
];

function BackgroundShapes() {
  return (<>
    {shapes.map((shape, index) => (
      <Polygon key={index} {...shape} />
    ))}
  </>)
};

export default BackgroundShapes;
