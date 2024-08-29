import "../index.scss"

import Form from "../components/Form"
import Projets from "../projets.json"

function SectionProjets() {
    
    return (
        <div className='projets_wrapper' id="about">
            <h2 className="projets_title">Create new employee</h2>
            <section className="form_container">
                <Form/>
            </section>
        </div>
    )
}

export default SectionProjets