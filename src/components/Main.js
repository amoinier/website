import React from 'react';
import styled from 'styled-components'

import Photo from './Photo'
import NetworkIcon from './NetworkIcon'

import utils from '../utils'

const CenterPart = styled.div`
  clip-path: circle(600px at 0% 0);
  background-color: ${utils.themeColor};

  display: grid;
  grid-template-rows: 500px auto;
`

const Header = styled.header`
  display: grid;
  grid-template-columns: 50% 50%;
`

const LeftHeader = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  width: 100%;
`

const PhotoPart = styled.div`
  padding: 20px;
  width: 100%;

  display: grid;
  grid-template-rows: 450px auto;
`

function Main() {
  return (
    <CenterPart className='centerPart'>
      <Header className='header'>
      <LeftHeader className='leftHeader'>
        <PhotoPart className='photoPart'>
          <Photo></Photo>
          <div>
            <NetworkIcon>
            </NetworkIcon>
          </div>
        </PhotoPart>
        <div>

        </div>
      </LeftHeader>
        <div></div>
      </Header>
      <div></div>
    </CenterPart>
  )
}

export default Main