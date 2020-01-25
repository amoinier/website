import React from 'react';
import styled from 'styled-components'

import utils from '../utils'

const PolygonDiv = styled.div`
  background-color: ${utils.thirdColor};
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 20px;
  transform: rotate(45deg);
  right: 0;
  top: 500px;
  z-index: -1;
  box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.1);
`

function Polygon(props) {
  return (
    <PolygonDiv style={{width: props.size, height: props.size, top: props.top, right: props.right, left: props.left, borderRadius: props.radius, transform: `rotate(${props.degree})`, backgroundColor: props.color, clipPath: props.clip}} className='Polygon' href={props.href}>
    </PolygonDiv>
  )
}

export default Polygon