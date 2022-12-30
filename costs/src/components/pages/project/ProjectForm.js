import { useEffect, useState } from 'react'


import Input from '../form/input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjectForm.module.css'

function ProjectForm( handleSubmit, btnText, projectData ) {

    Const [ categories, setCategories ] = useState([])
    const [project, setProject ] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories",{
            method:"GET",
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])

    const submit(e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name ]: e.target.value })
        console.log(project)
    }



    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text" 
                text="Project name"
                name="name"
                placeholder="Insert project name"
                handleOnChange={handleChange}
            />
            <Input 
                type="number" 
                text="budget"
                name="name"
                placeholder="Insert budget"
                handleOnChange={handleChange}
            />
            <Select name="category_id" 
            text="category selection" 
            options={categories}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm