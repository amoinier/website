import React from 'react';
import styled from 'styled-components'

import config from '../config'

import Title from './Title'


const LinkView = styled.a`
  justify-self: end;
  display: grid;

  text-decoration: none;
  text-align: right;
  color: ${config.black};
  background-color: ${config.lightwhite};
`

function Experience(props) {
  return (
    <React.Fragment>
      <Title style={{fontSize: '1.25em'}}>{props.data.title}</Title>
      <span>{props.data.date}</span>
      <p>{props.data.desc}</p>
      <LinkView href={props.data.href}>View More...</LinkView>
    </React.Fragment>
  )
}

export default Experience