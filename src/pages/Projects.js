import React, { useState, useEffect } from 'react'
import './Projects.css'

import Message from '../layout/Message';
import Container from '../layout/Container';
import Loading from '../layout/Loading';
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../project/ProjectCard';

import { useLocation } from 'react-router-dom'

function Projects() {

  const [projects, setProjects] = useState([]);
  //estado do loading
  const [removeloading, setRemoveLoading] = useState(false);
  //state de mensagens
  const [projectMessages, setProjectMessage] = useState('');

  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(resp => resp.json())
        .then(data => {
          setProjects(data)
          setRemoveLoading(true)
        })
        .catch(err => console.log(err))
    }, 600)
  }, []);

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(resp => resp.json())
    .then(() => {
      setProjects(projects.filter((project) => project.id !== id))
      //mensagem de remoção
      setProjectMessage('Projeto removido com sucesso!')
    })
    .catch(err => console.log(err));
  }

  return (
    <div className='project-container'>
      <div className='title-container'>
        <h1>Meus Projetos</h1>
        <LinkButton to='/newproject' text='Criar Projeto' />
      </div>
      {message && <Message type="success" msg={message} />}
      {projectMessages && <Message type="success" msg={projectMessages} />}
      <Container customClass="start" >
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
        {!removeloading && <Loading />}
        {removeloading && projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>

    </div>

  )
}

export default Projects