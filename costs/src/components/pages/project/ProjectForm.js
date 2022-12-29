function ProjectForm() {
    return (
        <form>
            <div>
                <input type="text" placeholder="Insert project name" />
            </div>
            <div>
                <input type="number" placeholder="Insert budget" />
            </div>
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