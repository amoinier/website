import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Emoji from "react-emoji-render";

import config from "../config.json";

import Title from "./Title";
import { useEffect } from "react";

const ProjectLink = styled.a`
  display: grid;
  grid-template-rows: 40px 20px auto 50px;
  grid-row-gap: 10px;

  text-decoration: none;
  color: ${config.lightdark};
  cursor: pointer;
  padding: 40px;
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`;

const Info = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-row-gap: 5px;
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

interface GithubProjectProps {
  name: string;
  html_url: string;
  language: string;
  description: string;
  full_name: string;
  commits: string;
  stargazers_count: string;
  forks_count: string;
}

const Project = (props: ProjectProps) => {
  const [project, setProject] = useState<GithubProjectProps | null>(null);

  useEffect(() => {
    const getInfo = async () => {
      const results = await Promise.all([
        axios.get(`https://api.github.com/repositories/${props.detail.id}`, {
          auth: {
            username: config.username,
            password: config.githubToken,
          },
        }),
        axios.get(
          `https://api.github.com/repositories/${props.detail.id}/contributors`,
          {
            auth: {
              username: config.username,
              password: config.githubToken,
            },
          }
        ),
      ]).catch((err) => {
        console.log(err);
      });

      if (results) {
        results[0].data.commits = results[1].data.reduce(
          (total: number, contributor: { contributions: number }) =>
            total + contributor.contributions,
          0
        );
        setProject(results[0].data);
      }
    };

    getInfo().catch((err) => {
      console.log(err);
    });
  }, [props.detail.id]);

  return (
    <>
      {project && project.name ? (
        <ProjectLink className={props.detail.analytics} href={project.html_url}>
          <Title style={{ justifySelf: "start", fontSize: "1.25em" }}>
            {props.detail.contributor
              ? project.full_name
              : project.name.charAt(0).toUpperCase() + project.name.slice(1)}
          </Title>
          <div>
            {project.language}{" "}
            {props.detail.language ? `(${props.detail.language})` : ""}
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
      ) : (
        ""
      )}
    </>
  );
};

export default Project;
