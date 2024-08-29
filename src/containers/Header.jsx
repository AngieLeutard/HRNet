import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Header() {

  useEffect(() => {
    const sections = document.querySelectorAll("span")
    const navLi = document.querySelectorAll(".nav_link")
  
    window.onscroll = () => {
        var current = "";
        
        sections.forEach((section) => {
            const y = window.scrollY;
            const sectionTop = section.offsetTop;

            if (y >= sectionTop - 137 ) {
            current = section.getAttribute("id");
            }
        });
        
        navLi.forEach((a) => {
            a.classList.remove("active");
            if (a.classList.contains(current)) {
            a.classList.add("active");
            }
        });
    };
  }, []);
      
    return (
        <div className='header_wrapper'>
            <Link className='headerLogo_wrapper' to="/">
                <h1 className='header_logo'>HRnet</h1>
                <p className='header_text_logo'>FOR WEALTH HEALTH</p>
            </Link>
            <section className='nav_wrapper'>
                <nav className='navbar'>
                    <a className='about nav_link active' href="#about">
                        Home
                    </a>
                    <a className='projets nav_link' href='#projets'>
                        Create Employee
                    </a>
                    <a className='skills nav_link' href="#skills">
                        View current employees
                    </a>
                </nav>
            </section>
        </div>
    )
}

export default Header