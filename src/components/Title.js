import React from 'react';
import styled from 'styled-components'

import config from '../config'

const TitleText = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: ${config.black};
  justify-self: center;
  align-self: center;
  font-family: 'Lora', serif;
`

function Title(props) {
  return (
    <TitleText style={props.style}>
      {props.children}
    </TitleText>
  )
}

export default Title