import styled from "styled-components";
import EmojiRender from "react-emoji-render";

import config from "../config.json";
import projectsJson from "../projects.json";

import Title from "./Title";

// react-emoji-render ships CommonJS with `exports.default`. Depending on the
// bundler's interop the default import is either the component itself or the
// whole exports object, so unwrap it explicitly.
const Emoji: typeof EmojiRender =
  (EmojiRender as unknown as { default?: typeof EmojiRender }).default ?? EmojiRender;

// Generated at build time by scripts/fetch-projects.mjs
const projects: Record<string, GithubProject> = projectsJson;

const ProjectLink = styled.a`
  display: grid;
  grid-template-rows: 42px 16px auto 50px;
  grid-row-gap: 8px;

  text-decoration: none;
  color: ${config.lightdark};
  cursor: pointer;
  padding: 42px;
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`;

const Info = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-row-gap: 8px;
`;

interface ProjectProps {
  detail: {
    id: string;
    language?: string;
    description?: string;
    contributor?: boolean;
    analytics?: string;
  };
}

function Project(props: ProjectProps) {
  const project = projects[props.detail.id];

  if (!project?.name) {
    return null;
  }

  return (
    <ProjectLink className={props.detail.analytics} href={project.html_url}>
      <Title style={{ justifySelf: "start", fontSize: "1.25em" }}>
        {props.detail.contributor
          ? project.full_name
          : project.name.charAt(0).toUpperCase() + project.name.slice(1)}
      </Title>
      <div>
        {project.language} {props.detail.language ? `(${props.detail.language})` : ""}
      </div>
      <p>
        {project.description ? (
          <>
            <span>
              <Emoji text={project.description || ""} />
            </span>
            <br />
            <br />
          </>
        ) : (
          ""
        )}
        <span>{props.detail.description}</span>
      </p>
      <Details>
        <Info>
          <span
            style={{
              color: config.lightdark,
              fontWeight: "bold",
              fontSize: "1.25em",
            }}
          >
            {project.commits}
          </span>
          <span>Commits</span>
        </Info>

        <Info>
          <span
            style={{
              color: config.lightdark,
              fontWeight: "bold",
              fontSize: "1.25em",
            }}
          >
            {project.stargazers_count}
          </span>
          <span>Stars</span>
        </Info>

        <Info>
          <span
            style={{
              color: config.lightdark,
              fontWeight: "bold",
              fontSize: "1.25em",
            }}
          >
            {project.forks_count}
          </span>
          <span>Forks</span>
        </Info>
      </Details>
    </ProjectLink>
  );
}

export default Project;
