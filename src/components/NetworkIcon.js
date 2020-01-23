import React from 'react';
import styled from 'styled-components'

import utils from '../utils'

const BorderIcon = styled.a`
  background-color: ${utils.white};
  border-radius: 10px;
  cursor: pointer;

  display: grid;
  justify-content: center;
  align-content: center;
`

function NetworkIcon(props) {
  return (
    <BorderIcon href={props.href}>
      <img style={{width: '40px'}} src={props.src} alt={props.alt}></img>
    </BorderIcon>
  )
}

export default NetworkIcon