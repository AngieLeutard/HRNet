import "../index.scss"
import Projets from '../containers/Projets'

function CreateEmployee() {

    return (
      <div className="home_wrapper">
        <section className="projets_section padding_section">
          <Projets/>
        </section>
      </div>
    );
  }
    
  export default CreateEmployee