import React, { useState } from 'react'

import styles from '../project/ProjectForm.css'

import Inupt from '../components/form/Input'
import SubmitButton from '../components/form/SubmitButton'

function ServiceForm({ handleSubmit, btnText, projectData }) {

    const [service, setService] = useState({});

    function submit(e) { 
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e) {
        setService({ ...service, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Inupt
                type='text'
                text='Nome do serviço'
                name='name'
                placeholder='Insira o nome do serviço'
                handleOnChange={handleChange}
            />
            <Inupt
                type='number'
                text='Custo do serviço'
                name='cost'
                placeholder='Insira o valor total'
                handleOnChange={handleChange}
            />
            <Inupt
                type='text'
                text='Descrição do serviço'
                name='description'
                placeholder='Descreva o serviço'
                handleOnChange={handleChange}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ServiceForm