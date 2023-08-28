import React from 'react';
import './ProjectForm.css';

import Input from '../components/form/Input';
import Select from '../components/form/Select';
import SubmitButton from '../components/form/SubmitButton';

function ProjectForm({btnText}) {
  return (
    <form className='form'>
      <Input type='text' text='Nome do Projeto' name='name' placeholder='Insira o nome do projeto' />
      <Input type='number' text='Orçamento do Projeto' name='budget' placeholder='Insira o orçamento total' />
      <Select name='category_id' text='Selecione a categoria' />
      <SubmitButton text={btnText} />
    </form>
  )
}

export default ProjectForm