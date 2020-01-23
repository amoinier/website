import React from 'react';
import styled from 'styled-components'

import Photo from './Photo'
import NetworkIcon from './NetworkIcon'
import InfoText from './InfoText'
import Categorie from './Categorie'

import utils from '../utils'

const CenterPart = styled.div`
  clip-path: circle(600px at 0% 0);
  background-color: ${utils.themeColor};

  display: grid;
  grid-template-rows: 550px auto;
`

const Header = styled.header`
  display: grid;
  grid-template-columns: 50% 50%;
`

const LeftHeader = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 20px;

  padding: 20px;
`

const RightHeader = styled.div`
  display: grid;
  grid-template-rows: 50px auto;

  padding: 20px;
`

const PhotoPart = styled.div`

  display: grid;
  grid-template-rows: auto 100px;
`

const ContainerNetworkIcon = styled.div`
  padding: 20px 0px;

  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 20px;
`

const InfoPart = styled.div`
  padding: 20px 0px;
`

const CategoriesPart = styled.div`
  display: grid;
  grid-auto-columns: auto;
`

function Main() {
  return (
    <CenterPart className='centerPart'>
      <Header className='header'>
        <LeftHeader className='leftHeader'>
          <PhotoPart className='photoPart'>
            <Photo></Photo>
            <ContainerNetworkIcon>
              <NetworkIcon href={`mailto:${utils.email}`} src='../../at.svg' alt='email' />
              <NetworkIcon href={utils.linkedin} src='../../linkedin.svg' alt='linkedin' />
              <NetworkIcon href={utils.github} src='../../github.svg' alt='github' />
            </ContainerNetworkIcon>
          </PhotoPart>
          <InfoPart>
            {utils.infoText.map((text, ind) => <InfoText key={`infoText_${ind}`}>{text}</InfoText>)}
          </InfoPart>
        </LeftHeader>
        <RightHeader>
          <CategoriesPart>
            <Categorie>Home</Categorie>
          </CategoriesPart>
          <div></div>
        </RightHeader>
      </Header>
      <div></div>
    </CenterPart>
  )
}

export default Main