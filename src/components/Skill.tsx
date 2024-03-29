import styled from "styled-components";

import config from "../config.json";

const SkillText = styled.div`
  font-size: 1em;
  font-weight: bold;
  justify-self: center;
  align-self: center;
  color: ${config.lightdark};
  background-color: ${config.lightwhite};
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  padding: 8px;
  width: calc(100% - 20px);
  text-align: center;
  border-radius: 5px;
`;

interface SkillProps {
  children: string;
}

function Skill(props: SkillProps) {
  return <SkillText>{props.children}</SkillText>;
}

export default Skill;
