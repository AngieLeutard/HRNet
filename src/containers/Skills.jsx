import "../index.scss"
import EnhancedTable from '../components/Tmp';


function Skills() {
    return (
        <div className='skills_wrapper'>
            <h2 className="skills_title">View current employees</h2>
            <section className="currentEmployees_wrapper">
                <EnhancedTable/>
            </section>
        </div>
    )
}

export default Skills