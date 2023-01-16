import React from 'react'

function Footer() {

    return (
        <footer className="footer section">
            <div className="footer__container bd-grid">
                <h1 className="footer__title">Jefferson</h1>
                <p className="footer__description">Soy Jefferson y este es mi sitio web personal, consúltame aquí.</p>

                <div className="footer__social">
                    <a href="#footer" className="footer__link">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="#footer" className="footer__link">
                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="#footer" className="footer__link">
                        <i className="bx bxl-twitter"></i>
                    </a>
                </div>

                <p className="footer__copy">All right reserved by Jefferson Brioso - 2021</p>
            </div>
        </footer>
    )
}

export default Footer ;