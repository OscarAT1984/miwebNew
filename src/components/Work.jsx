import React from 'react'
import imgWork1 from '../img/work1.jpg'
import imgWork2 from '../img/work2.jpg'
import imgWork3 from '../img/work3.jpg'
import imgWork4 from '../img/work4.jpg'
import imgWork5 from '../img/work5.jpg'
import imgWork6 from '../img/work6.jpg'

const Work = () => {
    return (
        <>
            <main class="l-main">
            <section className="work section" id="work">
                <h2 className="section-title">Proyectos</h2>

                <div className="work__container bd-grid">
                    <div className="work__img">
                        <img src={imgWork1} alt="" />
                    </div>
                    <div className="work__img">
                        <img src={imgWork2}  alt="" />
                    </div>
                    <div className="work__img">
                        <img src={imgWork3}  alt="" />
                    </div>
                    <div className="work__img">
                        <img src={imgWork4}  alt="" />
                    </div>
                    <div className="work__img">
                        <img src={imgWork5}  alt="" />
                    </div>
                    <div className="work__img">
                        <img src={imgWork6}  alt="" />
                    </div>
                </div>
            </section>
            </main>
        </>
    )
}

export default Work
