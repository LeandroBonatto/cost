import { useHistory } from 'react-router-dom'
import styles from './NewProject.module.css'
import ProjectForm from './project/ProjectForm'

function NewProject() {

    const history = useHistory()

    function createPost(project) {

        //Inicialize cost and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
            console.log(data)
            //redirect
            history.push('projects', {message: 'Project sucessfully has been created'})
        })
        ).catch(err => console.log(err))

    }

    return (
    <div className={styles.newproject_container}>
        <h1>Create Project</h1>
        <p>Create your own project than add services</p>
        <ProjectForm handleSubmit={createPost} btnText="Create Project" />
    </div>
    )
}

export default NewProject