import React, { Fragment } from 'react';
import styled from 'styled-components'

import utils from '../utils'

const Border = styled.div`
  display: grid;

  padding: 15px;
  border-radius: 10px;
  background-color: ${utils.white}
`

const Image = styled.div`
  background-image: url("../../profile.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

function Photo() {
  return (
    <Fragment>
    <Border>
    <Image></Image>
    </Border>
    </Fragment>
  )
}

export default Photo