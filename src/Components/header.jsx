import React, { useState } from 'react';
import "../Styles/Header.css"

const Header = () => {  
const [userContent, setUserContent] = useState(false)
const [userRegister, setUserRegister] = useState(false)




    // const userBtn = document.querySelector("#user-icon");
    // const liencreate = document.querySelector("#create");
    // const userContentRegister = document.querySelector('.user-container-register');
    // const connect = document.querySelector("#connexion")
    
    
    // userBtn.addEventListener("click", ()=>{
    //     userContent.classList.toggle("active")
    //     userContentRegister.classList.remove("active")
    // });
    
    // liencreate.addEventListener("click", ()=>{
    //     userContentRegister.classList.toggle("active")
    //     userContent.classList.remove("active")
    // });
    
    // connect.addEventListener("click", ()=>{
    //     userContent.classList.toggle("active")
    //     userContentRegister.classList.remove("active")
    // })
    
    

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
                <div className='test'>
                <header>
                <a href="#"><img src={process.env.PUBLIC_URL + "/Assets/logo_site.png"} alt="" /></a>
                    <nav className="navigation">
                        <a href="#">ACCUEIL</a>
                        <a href="#">TARIF</a>
                        <a href="#">RÉSERVER</a>
                        <a href="#">CONTACT</a>
                        <button className="btnLogin-popup">DOMICILE</button>
                        <i id="user-icon" className='bx bxs-user bx-md'onClick={()=>{
                            // Toggle the value of userContent
                    setUserContent(prevUserContent => !prevUserContent);

                    // Always make sure userRegister is set to false when clicking user-icon
                    setUserRegister(false);
                        }}></i>
                        <span>M.NOM</span>
                        <div className={userContent==true?`user-container active`:`user-container`}>
                            <h2>Connectez-vous</h2>
                            <input type="email" placeholder="E-mail" />
                            <input type="password" placeholder="Mot de passe" />
                            <input className="btn-user" type="submit" value="Connexion" />
                            <p>Mot de passe oublié ? <a href="#">Redefinir mot de passe</a></p>
                            <p>Pas de compte ? <a href="#" id="create" onClick={()=>{
                                setUserContent(false)
                                setUserRegister(true)
                            }}>Créer un compte</a></p>
                        </div>
                        <div className={userRegister==true?`user-container-register active`:`user-container-register`}>
                            <h2>Inscrivez-vous</h2>
                            <input type="email" placeholder="E-mail" />
                            <input type="password" placeholder="Mot de passe" />
                            <input type="text" placeholder="Nom" />
                            <input type="text" placeholder="Prénom" />
                            <input type="text" placeholder="Votre adresse" />
                            <input type="number" placeholder="Numéro de téléphone" />
                            <input className="btn-user" type="submit" value="S'inscrire" />
                            <p>Mot de passe oublié ? <a href="#">Redefinir mot de passe</a></p>
                            <p>Déjà un compte ? <a href="#" id="connexion" onClick={()=>{
                                setUserContent(true)
                                setUserRegister(false)
                            }}>Ce Connecter</a></p>
                        </div>
                    </nav>
                    <i className='bx bxs-cog'></i>
                </header>
                </div>
                <script type="module" src="./script.js"></script>
            </body>

        </>
    );
}

export default Header;
