import Input from '../form/input'

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
                text="project budget"
                name="budget"
                placeholder="Insert project budget"
            />
            <div>
                <select name="category_id">
                    <option disabled>Select category</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Create project" />
            </div>
        </form>
    )
}

export default ProjectForm