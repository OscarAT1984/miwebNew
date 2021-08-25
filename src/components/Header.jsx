import React from 'react'
import Zoom from 'react-reveal/Zoom'

const Header = () => {
    return (
        <>
            <Zoom>
            <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a href="/" class="nav__logo">Oscar Tellez</a>
                </div>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link active">Inicio</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link">Sobre mi..</a></li>
                        <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
                        <li className="nav__item"><a href="#work" className="nav__link">Proyectos</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link">Contacto</a></li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu'></i>
                </div>
            </nav>
        </header>
        </Zoom>
        </>
    )
}

export default Header
