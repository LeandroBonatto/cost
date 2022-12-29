import { useState } from 'react'


import Input from '../form/input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjectForm.module.css'

function ProjectForm(btnText) {

    Const [ categories, setCategories ] = useState([])

    return (
        <form className={styles.form}>
            <Input 
                type="text" 
                text="Project name"
                name="name"
                placeholder="Insert project name"
            />
            <Input 
                type="number" 
                text="budget"
                name="name"
                placeholder="Insert budget"
            />
            <Select name="category_id" text="category selection " />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm