import React from 'react';
import styled from 'styled-components'

import Photo from './Photo'
import NetworkIcon from './NetworkIcon'
import InfoText from './InfoText'
import Categorie from './Categorie'
import Title from './Title'
import Skill from './Skill'
import Experience from './Experience'

import utils from '../utils'

const CenterPart = styled.div`
  display: grid;
  grid-template-rows: 600px 1fr 1fr 1fr;
  grid-row-gap: 10vh;
`

const Header = styled.header`
  display: grid;
  grid-template-columns: 600px auto;
`

const LeftHeader = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-column-gap: 20px;

  padding: 20px;
  clip-path: circle(600px at 0% 0);
  background-color: ${utils.themeColor};
`

const RightHeader = styled.div`
  display: grid;
  grid-template-rows: 50px auto;

  padding: 20px;
`

const PhotoPart = styled.div`
  margin-bottom: 50px;
  
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
  grid-auto-flow: column;
  justify-items: end;
`

const AboutMe = styled.div`
  padding: 20px;
  text-align: center;
  align-self: center;
  font-size: 1.5em;
  color: ${utils.grey}
`

const CategorieContent = styled.div`
  padding: 20px;

  display: grid;
  grid-template-rows: auto auto;
  grid-row-gap: 20px;
`

const Content = styled.div`
  color: ${utils.grey};
  background-color: ${utils.lightwhite};
  padding: 40px;
  border-radius: 4px;
  box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.1);

  display: grid;
  gridTemplateRows: auto auto auto auto;
`

const SkillContent = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, 150px);
align-content: flex-start;
grid-column-gap: 10px;
grid-row-gap: 10px;
justify-content: center;
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
            {utils.categories.map((categorie, ind) => <Categorie key={`categorie_${ind}`}>{categorie.name}</Categorie>)}
          </CategoriesPart>
          <AboutMe>
            {utils.desc.map((desc, ind) => <p key={`aboutme_${ind}`}>{desc}</p>)}
          </AboutMe>
        </RightHeader>
      </Header>
      <CategorieContent>
        <Title>
          Skills
        </Title>
        <SkillContent>
          {utils.skills.map((skill, ind) => <Skill key={`skill_${ind}`}>{skill}</Skill>)}
        </SkillContent>
      </CategorieContent>
      <CategorieContent>
        <Title>
          Experience
        </Title>
        <Content style={{backgroundColor: utils.white, boxShadow: 'none', borderRadius: '0px', padding: '0px', display: 'grid', gridTemplateColumns: '400px 400px', justifyContent: 'center', gridColumnGap: '20px'}}>
          {utils.experiences.map((experience, ind) => <Content key={`experience_${ind}`}><Experience data={experience}></Experience></Content>)}
        </Content>
      </CategorieContent>
      <CategorieContent>
        <Title>
          Projects
        </Title>
      </CategorieContent>

    </CenterPart>
  )
}

export default Main