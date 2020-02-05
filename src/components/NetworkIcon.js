import React from 'react';
import styled from 'styled-components'

import config from '../config'

const BorderIcon = styled.a`
  background-color: ${config.white};
  border-radius: 10px;
  cursor: pointer;

  display: grid;
  justify-content: center;
  align-content: center;
`

function NetworkIcon(props) {
  return (
    <BorderIcon href={props.href}>
      <img style={{width: '30px'}} src={props.src} alt={props.alt}></img>
    </BorderIcon>
  )
}

export default NetworkIcon