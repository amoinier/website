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
  grid-row-gap: 10vh;

  @media screen and ${config.deviceScreen.laptop} {
    grid-template-rows: repeat(4, auto);
  }
`;

const Header = styled.header`
  display: grid;
  grid-template-columns: 600px auto;

  @media screen and ${config.deviceScreen.laptop} {
    grid-template-columns: initial;
    grid-template-rows: auto auto;
  }
`;

const LeftHeader = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-column-gap: 16px;

  max-width: 600px;
  padding: 16px;
  clip-path: circle(600px at 0% 0);
  background-color: ${config.themeColor};

  @media screen and ${config.deviceScreen.laptop} {
    grid-template-columns: 50% 50%;
  }
`;

const RightHeader = styled.div`
  display: grid;
  grid-template-rows: 50px auto;

  padding: 16px;
`;

const PhotoPart = styled.div`
  margin-bottom: 50px;

  display: grid;
  grid-template-rows: 420px 100px;

  @media screen and ${config.deviceScreen.laptop} {
    grid-template-rows: 450px auto;
  }
`;

const ContainerNetworkIcon = styled.div`
  padding: 16px 0px;

  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;

  @media screen and ${config.deviceScreen.laptop} {
    grid-template-columns: repeat(3, max-content);
  }
`;

const InfoPart = styled.div`
  padding: 16px 0px;
`;

const CategoriesPart = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-items: end;
  grid-gap: 8px;

  @media screen and ${config.deviceScreen.laptop} {
    justify-items: center;
  }
`;

const AboutMe = styled.div`
  padding: 16px;
  text-align: justify;
  align-self: center;
  font-size: 1.5em;
  color: ${config.lightdark};
`;

const CategorieContent = styled.div`
  padding: 16px;

  display: grid;
  grid-template-rows: auto auto;
  grid-row-gap: 16px;
`;

const Content = styled.div`
  color: ${config.lightdark};
  padding: 42px;
  border-radius: 5px;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);

  display: grid;

  @media screen and ${config.deviceScreen.laptop} {
    grid-row-gap: 16px;
  }
`;

const ExperienceContainer = styled.div`
  color: ${config.lightdark};
  border-radius: 5px;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);

  display: grid;

  box-shadow: none;
  border-radius: 0px;
  padding: 0px;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
  grid-column-gap: 16px;
  grid-row-gap: 16px;

  @media screen and ${config.deviceScreen.laptop} {
    grid-template-columns: initial;
    grid-row-gap: 16px;
  }
`;

const SkillContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 10%);
  align-content: flex-start;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  justify-content: center;

  @media screen and ${config.deviceScreen.laptop} {
    grid-template-columns: repeat(auto-fill, 30%);
  }
`;

function Main() {
  return (
    <CenterPart className="centerPart" id="home">
      <Header className="header">
        <LeftHeader className="leftHeader">
          <PhotoPart className="photoPart">
            <Photo />
            <ContainerNetworkIcon>
              <NetworkIcon
                className="umami--click--email umami--auxclick--email"
                href={`mailto:${config.email}`}
                src="../../at.svg"
                alt="email"
              />
              <NetworkIcon
                className="umami--click--linkedin umami--auxclick--linkedin"
                href={config.linkedin}
                src="../../linkedin.svg"
                alt="linkedin"
              />
              <NetworkIcon
                className="umami--click--github umami--auxclick--github"
                href={config.github}
                src="../../github.svg"
                alt="github"
              />
            </ContainerNetworkIcon>
          </PhotoPart>
          <InfoPart>
            {config.infoText.map((info, ind: number) => {
              const text = typeof info === "string" ? info : info.text;
              const className = typeof info === "string" ? "" : info.analytics;

              return (
                <InfoText className={className} key={`infoText_${ind}`}>
                  {text}
                </InfoText>
              );
            })}
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
        <ExperienceContainer>
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
        </ExperienceContainer>
      </CategorieContent>
      <CategorieContent id={config.categories[3].id}>
        <Title>{config.categories[3].name}</Title>
        <ExperienceContainer>
          {config.projectList.map((project, ind: number) => (
            <Content
              key={`project_${ind}`}
              style={{ background: config.lightwhite, padding: "0px" }}
            >
              <Project detail={project} />
            </Content>
          ))}
        </ExperienceContainer>
      </CategorieContent>
    </CenterPart>
  );
}

export default Main;
