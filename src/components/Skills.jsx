import React from 'react'
import imgSkill from '../img/work3.jpg'
import Roll from 'react-reveal/Roll';
import 'boxicons'


const Skills = () => {
    return (
        <> 
       
            <main class="l-main">
            <section className="skills section" id="skills">
                <h2 className="section-title">Skills</h2>
                <Roll left cascade>
                <div className="skills__container bd-grid">          
                    <div>
                        <h2 className="skills__subtitle">Profesional Skills</h2>
                        <p className="skills__text">Mis skills</p>
                        
                        <div className="skills__data">
                        
                            <div className="skills__names">
                                <i className='bx bxl-html5 skills__icon'></i>
                                <span className="skills__name">HTML5</span>
                            </div>
                            <div className="skills__bar skills__html">

                            </div>
                            <div>
                                <span className="skills__percentage">95%</span>
                            </div>
                            
                        </div>
                        
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-css3 skills__icon'></i>
                                <span className="skills__name">CSS3</span>
                            </div>
                            <div className="skills__bar skills__css">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">85%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-javascript skills__icon' ></i>
                                <span className="skills__name">JAVASCRIPT</span>
                            </div>
                            <div className="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">70%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxs-paint skills__icon'></i>
                                <span className="skills__name">UX/UI</span>
                            </div>
                            <div className="skills__bar skills__ux">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">35%</span>
                            </div>
                            
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-python skills__icon'></i>
                                <span className="skills__name">Python</span>
                            </div>
                            <div className="skills__bar skills__python">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">70%</span>
                            </div>
                            
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-nodejs skills__icon'></i>
                                <span className="skills__name">Node.js</span>
                            </div>
                            <div className="skills__bar skills__nodejs">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">40%</span>
                            </div>
                            
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxs-server skills__icon'></i>
                                <span className="skills__name">SQL SERVER Y MYSQL</span>
                            </div>
                            <div className="skills__bar skills__sql">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">70%</span>
                            </div>
                            
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-react skills__icon'></i>
                                <span className="skills__name">React.js</span>
                            </div>
                            <div className="skills__bar skills__react">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">70%</span>
                            </div>
                            
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxs-file-js skills__icon'></i>
                                <span className="skills__name">Next.js</span>
                            </div>
                            <div className="skills__bar skills__nextjs">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">50%</span>
                            </div>
                            
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-git skills__icon'></i>
                                <span className="skills__name">Git y GitHub</span>
                            </div>
                            <div className="skills__bar skills__git">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">70%</span>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div>   
                        
                        <img src={imgSkill} alt="" className="skills__img" />
                    </div>
                    
                </div>
                </Roll>
            </section>
            </main>
            
        </>
    )
}

export default Skills
