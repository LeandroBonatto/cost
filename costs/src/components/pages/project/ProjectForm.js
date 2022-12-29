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
            <Select />
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