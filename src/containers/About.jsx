import "../index.scss"
import aboutPicture from '../assets/moi.png';

function Skills() {
    return (
        <div className='about_wrapper'>
            <h2 className="about_title">Welcome !</h2>
            <section className="aboutDetails_wrapper">
                <img src={ aboutPicture } alt="aboutPicture" className="about_picture" />
                <p className="about_description">Welcome to <strong>HRnet</strong>, the application dedicated to managing employee files.<br></br><br></br>
                Here you can :<br></br><br></br><a className='projets nav_link' href='creation'>- create a new employee</a><br></br><a className='skills nav_link' href='view'>- view the list of current employees</a></p>
            </section>
        </div>
    )
}

export default Skills