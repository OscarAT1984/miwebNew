import React from 'react'

const Footer = () => {
    const face='https://www.facebook.com/oscararmando.tellezcovarrubias';
    const twitter = 'https://twitter.com/OscarArmandoTe3';
    return (
        <div>
            <footer className="footer">
            <p className="footer__title">Oscar Armando Tellez Covarrubias</p>
            <div className="footer__social">
                <a href={face} className="footer__icon" ><i className='bx bxl-facebook' ></i></a>
                {/* <a href="/" className="footer__icon"><i className='bx bxl-instagram' ></i></a> */}
                <a href={twitter} className="footer__icon"><i className='bx bxl-twitter' ></i></a>
            </div>
            <p>&#169; 2021 copyright all right reserved</p>
        </footer>
        </div>
    )
}

export default Footer   