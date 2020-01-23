import React from 'react';
import styled from 'styled-components'

import utils from '../utils'

const TextSpan = styled.div`
font-size: 1.5em;
font-weight: bold;
color: ${utils.white};
`

function InfoText(props) {
  return (
    <TextSpan>
      {props.children}
    </TextSpan>
  )
}

export default InfoText