import React from 'react'
import './Projects.css'

import Message from '../layout/Message'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton';

import { useLocation } from 'react-router-dom'

function Projects() {

  const location = useLocation();
  let message = '';

  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className='project-container'>
      <div className='title-container'>
        <h1>Meus Projetos</h1>
        <LinkButton to='/newproject' text='Criar Projeto' />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start" >
        <p> Projetos...</p>
      </Container>

    </div>

  )
}

export default Projects