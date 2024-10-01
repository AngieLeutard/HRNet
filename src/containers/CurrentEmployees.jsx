import "../index.scss"
import EmployeesTable from '../components/EmployeesTable';

function Skills() {
    return (
        <div className='table_wrapper'>
            <h2 className="table_title">View current employees</h2>
            <section className="currentEmployees_wrapper">
                <EmployeesTable/>
            </section>
        </div>
    )
}

export default Skills