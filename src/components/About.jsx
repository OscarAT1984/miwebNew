import React from 'react'
import imgAbout from '../img/about.jpg'

const About = () => {
    return (
        <>
            <main class="l-main">
            <section className="about section " id="about">
                <h2 className="section-title">Sobre mi</h2>

                <div className="about__container bd-grid">
                    <div className="about__img">
                        <img src={imgAbout} alt="" />
                    </div>
                    
                    <div>
                        <h2 className="about__subtitle">Yo  Soy Oscar</h2>
                        <p className="about__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.</p>           
                    </div>                                   
                </div>
            </section>
            </main>
        </>
    )
}

export default About
