import React, { useState } from 'react';
import "../Styles/Header.css"
import { Link } from 'react-router-dom';

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
                <header>
                <a href="/"><img src={process.env.PUBLIC_URL + "/Assets/logo_site.png"} alt="" /></a>
                    <nav className="navigation">
                        <a href="/" className='laclasse-a'>ACCUEIL</a>
                        <a href="#Tarif" className='laclasse-a'>TARIF</a>
                        <a href="/ReservationSite"className='laclasse-a'>RÉSERVER</a>
                        <a href="/contact" className='laclasse-a'>CONTACT</a>                        
                        <button className="btnLogin-popup" ><a href="/Domicile" className='laclasse-btn-a'>DOMICILE</a></button>
                        <i id="user-icon" className='bx bxs-user bx-md'onClick={()=>{
                            setUserContent(prevUserContent =>!prevUserContent)
                            setUserRegister(false)
                        }}></i>
                        <span><a href="/monCompte" className='laclasse-btn-a'>M.NOM</a></span>
                        <div className={userContent==true?`user-container active`:`user-container`}>
                            <h2>Connectez-vous</h2>
                            <input type="email" placeholder="E-mail" />
                            <input type="password" placeholder="Mot de passe" />
                            <input className="btn-user" type="submit" value="Connexion" />
                            <p>Mot de passe oublié ? <a href="#" className='laclasse-a'>Redefinir mot de passe</a></p>
                            <p>Pas de compte ? <a href="#" id="create" className='laclasse-a' onClick={()=>{
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
                            <p>Déjà un compte ? <a href="#" id="connexion" className='laclasse-a' onClick={()=>{
                                setUserContent(true)
                                setUserRegister(false)
                            }}>Ce Connecter</a></p>
                        </div>
                    </nav>
                    <i className='bx bxs-cog'></i>
                </header>
                <script type="module" src="./script.js"></script>
            </body>

</>
    );
    
}

export default Header;
