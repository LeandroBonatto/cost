import Input from '../form/input'
import Select from '../form/Select'

import styles from './ProjectForm.module.css'

function ProjectForm() {
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
            <div>
                <input type="submit" value="Create project" />
            </div>
        </form>
    )
}

export default ProjectForm