import "../index.scss"

import About from '../containers/About'

function Home() {

    return (
      <div className="home_wrapper">
        <section className="about_section padding_section">
          <About/>
        </section>
      </div>
    );
  }
    
  export default Home