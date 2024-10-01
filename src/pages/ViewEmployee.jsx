import "../index.scss"
import CurrentEmployees from "../containers/CurrentEmployees";

function ViewEmployee() {

    return (
      <div className="home_wrapper">
        <section className="projets_section padding_section">
          <CurrentEmployees/>
        </section>
      </div>
    );
  }
    
  export default ViewEmployee