import React, { Fragment, useState } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import Emoji from "react-emoji-render";

import config from '../config'

import Title from './Title'
import { useEffect } from 'react';

const ProjectLink = styled.a`
display: grid;
grid-template-rows: 40px 20px auto 50px;
grid-row-gap: 10px;

text-decoration: none;
color: ${config.lightdark};
cursor: pointer;
padding: 40px;
`

const Details = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`

const Info = styled.div`
display: grid;
grid-template-rows: auto auto;
grid-row-gap: 5px;
`

function Project(props) {
  const [project, setProject] = useState({})

  useEffect(() => {
    const getInfo = async () => {
      const [res, contributors] = await Promise.all([
        axios.get(`https://api.github.com/repositories/${props.detail.id}`, {
          auth: {
            username: config.username,
            password: config.githubToken
          }
        }),
        axios.get(`https://api.github.com/repositories/${props.detail.id}/contributors`, {
          auth: {
            username: config.username,
            password: config.githubToken
          }
        })])
        .catch((err) => {
        console.log(err);
      })

      res.data.commits = contributors.data.reduce((total, contributor) => total + contributor.contributions, 0)
      setProject(res.data)
    }

    getInfo().catch((err) => {
      console.log(err)
    })
    
  }, [props.detail.id])
  
  return (
    <Fragment>
      { project && project.name ?
      <ProjectLink href={project.html_url}>
        <Title style={{justifySelf: 'start', fontSize: '1.25em'}}>{props.detail.contributor ? project.full_name : project.name.charAt(0).toUpperCase() + project.name.slice(1)}</Title>
        <div>{project.language} {props.detail.language ? `(${props.detail.language})` : ''}</div>
        <p>
          { project.description ?
          <Fragment>
          <span><Emoji text={project.description || ''} /></span>
            <br/>
            <br/>
          </Fragment>
          : '' }
          <span>{props.detail.description}</span>
        </p>
        <Details>
          <Info>
            <span style={{color: config.lightdark, fontWeight: 'bold', fontSize: '1.25em'}}>{project.commits}</span>
            <span>Commits</span>
          </Info>

          <Info>
            <span style={{color: config.lightdark, fontWeight: 'bold', fontSize: '1.25em'}}>{project.stargazers_count}</span>
            <span>Stars</span>
          </Info>

          <Info>
            <span style={{color: config.lightdark, fontWeight: 'bold', fontSize: '1.25em'}}>{project.forks_count}</span>
            <span>Forks</span>
          </Info>
        </Details>
      </ProjectLink>
      : ''}
    </Fragment>
  )
}

export default Project