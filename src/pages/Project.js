import React, { useState, useEffect } from 'react'
import './Project.css'
import Loading from '../layout/Loading'
import Container from '../layout/Container'

import { useParams } from 'react-router-dom'

function Project() {

    const { id } = useParams();
    const [project, setProject] = useState([]);
    const [showProjectForm, setProjectForm] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((resp) => resp.json())
                .then((data) => {
                    setProject(data)
                })
                .catch(err => console.log(err))
        }, 3000)
    }, [id]);

    function toggleProjectForm() {
        setProjectForm(!showProjectForm)
    }

    return (
        <>
            {project.name ? (
                <div className='project-details'>
                    <Container customClass='column'>
                        <div className='details-container'>
                            <h1>Projeto: {project.name}</h1>
                            <button className='btn' onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div className='project-info'>
                                    <p>
                                        <span>Categoria:</span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total de Orçamento:</span> R${project.budget}
                                    </p>
                                    <p>
                                        <span>Total Utilizado:</span> R${project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className='project-info'>
                                    <p>form</p>
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Project