import React from "react";
import styled from "styled-components";

import Photo from "./Photo";
import NetworkIcon from "./NetworkIcon";
import InfoText from "./InfoText";
import Categorie from "./Categorie";
import Title from "./Title";
import Skill from "./Skill";
import Experience from "./Experience";
import Project from "./Project";

import config from "../config.json";

const CenterPart = styled.div`
  display: grid;
  grid-template-rows: 600px repeat(3, auto);
  grid-row-gap: 10vh;
`;

const Header = styled.header`
  display: grid;
  grid-template-columns: 600px auto;
`;

const LeftHeader = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-column-gap: 20px;

  width: 600px;
  padding: 20px;
  clip-path: circle(600px at 0% 0);
  background-color: ${config.themeColor};
`;

const RightHeader = styled.div`
  display: grid;
  grid-template-rows: 50px auto;

  padding: 20px;
`;

const PhotoPart = styled.div`
  margin-bottom: 50px;

  display: grid;
  grid-template-rows: 420px 100px;
`;

const ContainerNetworkIcon = styled.div`
  padding: 20px 0px;

  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 20px;
`;

const InfoPart = styled.div`
  padding: 20px 0px;
`;

const CategoriesPart = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-items: end;
`;

const AboutMe = styled.div`
  padding: 20px;
  text-align: justify;
  align-self: center;
  font-size: 1.5em;
  color: ${config.lightdark};
`;

const CategorieContent = styled.div`
  padding: 20px;

  display: grid;
  grid-template-rows: auto auto;
  grid-row-gap: 20px;
`;

const Content = styled.div`
  color: ${config.lightdark};
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);

  display: grid;
`;

const SkillContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 10%);
  align-content: flex-start;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-content: center;
`;

function Main() {
  return (
    <CenterPart className="centerPart" id="home">
      <Header className="header">
        <LeftHeader className="leftHeader">
          <PhotoPart className="photoPart">
            <Photo></Photo>
            <ContainerNetworkIcon>
              <NetworkIcon
                href={`mailto:${config.email}`}
                src="../../at.svg"
                alt="email"
              />
              <NetworkIcon
                href={config.linkedin}
                src="../../linkedin.svg"
                alt="linkedin"
              />
              <NetworkIcon
                href={config.github}
                src="../../github.svg"
                alt="github"
              />
            </ContainerNetworkIcon>
          </PhotoPart>
          <InfoPart>
            {config.infoText.map((text, ind) => (
              <InfoText key={`infoText_${ind}`}>{text}</InfoText>
            ))}
          </InfoPart>
        </LeftHeader>
        <RightHeader>
          <CategoriesPart>
            {config.categories.map((categorie, ind) => (
              <Categorie key={`categorie_${ind}`}>{categorie.name}</Categorie>
            ))}
          </CategoriesPart>
          <AboutMe>
            {config.desc.map((desc, ind) => (
              <p key={`aboutme_${ind}`}>{desc}</p>
            ))}
          </AboutMe>
        </RightHeader>
      </Header>
      <CategorieContent id={config.categories[1].id}>
        <Title>{config.categories[1].name}</Title>
        <SkillContent>
          {config.skills.map((skill, ind) => (
            <Skill key={`skill_${ind}`}>{skill}</Skill>
          ))}
        </SkillContent>
      </CategorieContent>
      <CategorieContent id={config.categories[2].id}>
        <Title>{config.categories[2].name}</Title>
        <Content
          style={{
            boxShadow: "none",
            borderRadius: "0px",
            padding: "0px",
            display: "grid",
            gridTemplateColumns: `repeat(${config.experiences.length}, auto)`,
            justifyContent: "center",
            gridColumnGap: "20px",
          }}
        >
          {config.experiences.map((experience, ind) => (
            <Content
              key={`experience_${ind}`}
              style={{
                background: config.lightwhite,
                gridTemplateRows: "40px repeat(auto-fit, auto)",
              }}
            >
              <Experience data={experience} />
            </Content>
          ))}
        </Content>
      </CategorieContent>
      <CategorieContent id={config.categories[3].id}>
        <Title>{config.categories[3].name}</Title>
        <Content
          style={{
            boxShadow: "none",
            padding: "0px",
            display: "grid",
            gridTemplateColumns: `repeat(auto-fit, 300px)`,
            gridRowGap: "20px",
            justifyContent: "center",
            gridColumnGap: "20px",
          }}
        >
          {config.projectList.map((project, ind) => (
            <Content
              key={`project_${ind}`}
              style={{ background: config.lightwhite, padding: "0px" }}
            >
              <Project detail={project} />
            </Content>
          ))}
        </Content>
      </CategorieContent>
    </CenterPart>
  );
}

export default Main;
