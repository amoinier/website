import React from "react";
import styled from "styled-components";

import config from "../config.json";

const CategorieText = styled.a`
  font-size: 1.5em;
  font-weight: bold;
  color: ${config.black};
  cursor: pointer;
  font-family: "Helvetica", serif;
`;

interface CategorieProps {
  children: string;
}

const Categorie = (props: CategorieProps) => {
  return (
    <CategorieText href={`#${props.children.toLowerCase()}`}>
      {props.children}
    </CategorieText>
  );
};

export default Categorie;