import React from 'react';
import styled from 'styled-components'

import config from '../config'

const TextSpan = styled.div`
font-size: 1.5em;
font-weight: bold;
color: ${config.white};
`

function InfoText(props) {
  return (
    <TextSpan>
      {props.children}
    </TextSpan>
  )
}

export default InfoText