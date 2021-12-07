import "./Footer.scss"
const Footer = () => {

    return(
        <footer className="footer" class="footer-area footer--light">
            <div class="footer-big">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-12">
                        <div class="footer-widget">
                            <div class="widget-about">
                            <ul class="contact-details">
                                <li>
                                <span class="icon-earphones"></span> Call Us:
                                <a href="tel:678-44-07-04">678-44-07-04</a>
                                </li>
                                <li>
                                <span class="icon-envelope-open"></span>
                                <a href="92sanchez.raul@gmail.com">92sanchez.raul@gmail.com</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>                
                        <div class="col-md-3 col-sm-4">
                        <div class="footer-widget">
                            <div class="footer-menu footer-menu--1">
                            <h4 class="footer-widget-title">Sobre Nosotros</h4>
                            <ul>
                                <li>
                                <span href="#">Cuidamos de tus animales con total confianza</span>
                                </li>
                                <br></br>
                                <li>
                                    Líderes en el sector
                                </li>
                            </ul>
                            </div>            
                        </div>            
                        </div>            
                        <div class="mini-footer">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="copyright-text">
                                            <p>© 2021
                                            <a href="#">RaulHSanchez</a>. All rights reserved. Created by
                                            <a href="#">RaulhSanchez</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    )
}
export default Footer