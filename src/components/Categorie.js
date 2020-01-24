import React from 'react';
import styled from 'styled-components'

import utils from '../utils'

const CategorieText = styled.a`
  font-size: 1.5em;
  font-weight: bold;
  color: ${utils.black};
  cursor: pointer;
  font-family: 'Lora', serif;
`

function Categorie(props) {
  return (
    <CategorieText href={`#${props.children.toLowerCase()}`}>
      {props.children}
    </CategorieText>
  )
}

export default Categorie