import React from 'react'
import imgAssets from '../img/perfil.jpg'

const Home = () => {

    const contacto = 'https://www.linkedin.com/in/oscar-armando-tellez-covarrubias'
    const git= 'https://github.com/OscarAT1984'


    return (
        
        <>
            <main class="l-main">
            <section className="home bd-grid" id="home">
                <div className="home__data">
                    <h1 className="home__title">Hola<br />Soy <span className="home__title-color">Oscar Tellez</span><br /> Frontend Developer</h1>

                    {/* <a href="/" className="button">Contacto</a> */}
                </div>

                <div class="home__social">
                    <a href={contacto} className="home__social-icon"><i class='bx bxl-linkedin'></i></a>
                    {/* <a href="/" className="home__social-icon"><i class='bx bxl-behance' ></i></a> */}
                    <a href={git} className="home__social-icon"><i class='bx bxl-github' ></i></a>
                </div>

                <div className="home__img">    
                    <img src={imgAssets} alt="" />
                </div>
            </section>
            </main>
        </>
    )
}

export default Home
