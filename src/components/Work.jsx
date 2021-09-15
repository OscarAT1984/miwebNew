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
                        <a href="https://github.com/OscarAT1984/file-system-booking">
                        <img src={imgWork1} alt="" />
                        </a>
                        <br />
                        <p>File System Booking</p>
                    </div>
                    <div className="work__img">
                        <a href="https://github.com/OscarAT1984/Games">
                        <img src={imgWork2}  alt="" />
                        </a>
                        <br />
                        <p>Games</p>
                    </div>
                    <div className="work__img">
                        <a href="https://github.com/OscarAT1984/MiWebNextJS">
                        <img src={imgWork3}  alt="" />
                        </a>
                        <br />
                        <p>Mi web con Next.js</p>
                    </div>
                    <div className="work__img">
                        <a href="https://github.com/OscarAT1984/regresionLogistica">
                        <img src={imgWork4}  alt="" />
                        </a>
                        <br />
                        <p>Regresion Logistica</p>
                    </div>
                    <div className="work__img">
                        <a href="https://github.com/OscarAT1984/app">
                        <img src={imgWork5}  alt="" />
                        </a>
                        <br />
                        <p>APP Chat con Socket.IO</p>
                    </div>
                    <div className="work__img">
                        <a href="https://github.com/OscarAT1984/miwebNew">
                        <img src={imgWork6}  alt="" />
                        </a>
                        <br />
                        <p>Mi Web New</p>
                    </div>
                </div>
            </section>
            </main>
        </>
    )
}

export default Work
