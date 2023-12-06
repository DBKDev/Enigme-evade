import React from 'react';
import "../Styles/Footer.css"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-box">
                    <h2>Enigmes Évadées</h2>
                    <div className="social">
                        <i className='bx bxl-facebook'></i>
                        <i className='bx bxl-instagram'></i>
                        <i className='bx bxl-twitter'></i>
                        <i className='bx bxl-youtube'></i>
                        <i className='bx bxl-tiktok'></i>
                    </div>
                </div>

                <div className="footer-box">
                    <h2>Informations</h2>
                    <ul>
                        <li><a href="#">Conditions de vente</a></li>
                        <li><a href="#">Mentions légales</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Nous contacter</a></li>
                        <li><a href="#">Voir le plan</a></li>
                    </ul>
                </div>
                <div className="footer-box">
                    <h2>Nos locaux</h2>
                    <ul>
                        <li><a href="#">Adresse : 46 Rue Faidherbe - Lille (59350)</a></li>
                        <li><a href="#">Numéro : 0666666666</a></li>
                        <li><a href="#">Mail : tbialasik@fcdigital.fr</a></li>
                        <li><a href="#">Horaire : 9H 12H – 14H 00H</a></li>
                    </ul>
                </div>
                <div className="footer-box">
                    <h2>Paiements Acceptés</h2>
                    <div className="payment">
                        <img src={process.env.PUBLIC_URL + "/Images/pay-01.png"} alt="" />
                        <img src={process.env.PUBLIC_URL + "/Images/pay-02.png"} alt="" />
                        <img src={process.env.PUBLIC_URL + "/Images/pay-03.png"} alt="" />
                        <img src={process.env.PUBLIC_URL + "/Images/pay-04.png"} alt="" />
                    </div>
                </div>
            </footer>

            <div className="copy">
                <p>&copy; Nom de société fictif- tout droits réservés - 2023</p>
            </div>
        </>
    );
}

export default Footer;
