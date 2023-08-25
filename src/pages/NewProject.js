import React from 'react'
import './NewProject.css'

import ProjectForm from '../project/ProjectForm'

function NewProject() {
  return (
    <div className='newproject-container'>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm />
    </div>
  )
}

export default NewProject