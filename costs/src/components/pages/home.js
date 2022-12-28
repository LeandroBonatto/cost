import styles from './home.module.css'
import savings from '../../img/savings.svg'

function Home() {
    return (
        <section>
            <h1>Welcome to <span>Costs</span></h1>
            <p>Start managing your projects</p>
            <a href="/">Create Projects</a>
            <img src={savings} alt={Costs} />

        </section>
    )
}

export default Home