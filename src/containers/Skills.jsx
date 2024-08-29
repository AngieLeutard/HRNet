import "../index.scss"
import Tab from "../components/CurrentEmployees"

function Skills() {
    return (
        <div className='skills_wrapper'>
            <h2 className="skills_title">View current employees</h2>
            <section className="currentEmployees_wrapper">
                <Tab/>
            </section>
        </div>
    )
}

export default Skills