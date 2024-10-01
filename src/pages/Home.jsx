import "../index.scss"
import About from '../containers/About'
import Modal from '../components/Modal'

function Home() {

    return (
      <div className="home_wrapper">
        <section className="about_section padding_section">
          <About/>
          <Modal/>
        </section>
      </div>
    );
  }
    
  export default Home