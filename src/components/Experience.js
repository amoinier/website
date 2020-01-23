import React from 'react';
import styled from 'styled-components'

import utils from '../utils'

import Title from './Title'


const LinkView = styled.a`
  justify-self: end;
  display: grid;

  text-decoration: none;
  text-align: right;
  color: ${utils.black};
`

function Experience(props) {
  return (
    <React.Fragment>
      <Title>{props.data.title}</Title>
      <span>{props.data.date}</span>
      <p>{props.data.desc}</p>
      <LinkView href={props.data.href}>View More...</LinkView>
    </React.Fragment>
  )
}

export default Experience