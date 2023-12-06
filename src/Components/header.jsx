import React from 'react';
import "../Styles/Header.css"

const Header = () => {  


    return (
        <>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
                <title>Document</title>
            </head>
            <body>
                {/* Header menu avec bouton Login */}
                <header>
                <a href="#"><img src={process.env.PUBLIC_URL + "/Assets/logo_site.png"} alt="" /></a>
                    <nav className="navigation">
                        <a href="#">ACCUEIL</a>
                        <a href="#">TARIF</a>
                        <a href="#">RÉSERVER</a>
                        <a href="#">CONTACT</a>
                        <button className="btnLogin-popup">DOMICILE</button>
                        <i id="user-icon" className='bx bxs-user bx-md'></i>
                        <span>M.NOM</span>
                        <div className="user-container">
                            <h2>Connectez-vous</h2>
                            <input type="email" placeholder="E-mail" />
                            <input type="password" placeholder="Mot de passe" />
                            <input className="btn-user" type="submit" value="Connexion" />
                            <p>Mot de passe oublié ? <a href="#">Redefinir mot de passe</a></p>
                            <p>Pas de compte ? <a href="#" id="create">Créer un compte</a></p>
                        </div>
                        <div className="user-container-register">
                            <h2>Inscrivez-vous</h2>
                            <input type="email" placeholder="E-mail" />
                            <input type="password" placeholder="Mot de passe" />
                            <input type="text" placeholder="Nom" />
                            <input type="text" placeholder="Prénom" />
                            <input type="text" placeholder="Votre adresse" />
                            <input type="number" placeholder="Numéro de téléphone" />
                            <input className="btn-user" type="submit" value="S'inscrire" />
                            <p>Mot de passe oublié ? <a href="#">Redefinir mot de passe</a></p>
                            <p>Déjà un compte ? <a href="#" id="connexion">Ce Connecter</a></p>
                        </div>
                    </nav>
                    <i className='bx bxs-cog'></i>
                </header>
            </body>

        </>
    );
}

export default Header;
