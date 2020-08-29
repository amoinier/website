import React from "react";
import styled from "styled-components";

import config from "../config.json";

import Title from "./Title";

const LinkView = styled.a`
  justify-self: end;
  display: grid;

  text-decoration: none;
  text-align: right;
  color: ${config.black};
  background-color: ${config.lightwhite};
`;

interface ExperienceProps {
  data: {
    title: string;
    date: string;
    desc: string;
    href: string;
    analytics?: string;
  };
}

const Experience = (props: ExperienceProps) => {
  return (
    <>
      <Title style={{ fontSize: "1.25em" }}>{props.data.title}</Title>
      <span>{props.data.date}</span>
      <p>{props.data.desc}</p>
      <LinkView className={props.data.analytics} href={props.data.href}>
        View More...
      </LinkView>
    </>
  );
};

export default Experience;
