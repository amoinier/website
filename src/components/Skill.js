import React from 'react';
import styled from 'styled-components'

import utils from '../utils'

const SkillText = styled.div`
  font-size: 1em;
  font-weight: bold;
  justify-self: center;
  align-self: center;
  color: ${utils.lightdark};
  background-color: ${utils.lightwhite};
  box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.1);
  padding: 10px;
  width: calc(100% - 20px);
  text-align: center;
  border-radius: 4px;
`

function Skill(props) {
  return (
    <SkillText>
      {props.children}
    </SkillText>
  )
}

export default Skill