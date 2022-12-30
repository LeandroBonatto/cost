import styles from './Select.module.css'

function Select({ text, name, options, handleOnChange, value}) {
    return (
        <div className={styles.form_control} >
            <label htmlFor={name}>{text}</label>
            <label htmlFor={name}>{text}:</label>
            <select name={name} 
                    id={name} 
                    onChange={handleOnChange} 
                    value={value || ''} 
                    >
                <option>Select an option</option>
                {options.map((option) => (
                    <options value={option.id} key={option.id}>
                        {option.name}
                    </options>
                ))}
            </select>
        </div>
    )
}

export default Select