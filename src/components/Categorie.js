import React from 'react';
import styled from 'styled-components'

import utils from '../utils'

const CategorieText = styled.span`
font-size: 24px;
color: ${utils.black};
`

function Categorie(props) {
  return (
    <CategorieText>
      {props.children}
    </CategorieText>
  )
}

export default Categorie