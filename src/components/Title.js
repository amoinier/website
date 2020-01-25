import React from 'react';
import styled from 'styled-components'

import utils from '../utils'

const TitleText = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: ${utils.black};
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