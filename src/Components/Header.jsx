import React, { useState } from 'react';
import "../Styles/Header.css"
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import inscriptionService from '../Services/inscriptionService';
import connexionService from '../Services/connexionService';

const Header = () => {  
const [userContent, setUserContent] = useState(false)
const [userRegister, setUserRegister] = useState(false)

const [inscription, setInscription] = useState({
    nom : "",
    prenom : "",
    email : "",
    password : "",
    adresse : "",
    numero:"",
});

const [connexion, setConnexion] = useState({
    emailco : "",
    passwordco : "",
});

const handleChangeConn = (e) => {
    const { name, value } = e.currentTarget;
    setConnexion({...connexion, [name]: value });
    console.log(connexion);
}

const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setInscription({...inscription, [name]: value });
    console.log(inscription);
}

const handleConn = async (e) => {
    e.preventDefault();
    try {
        const response = await connexionService.AddConnexion(connexion);
        toast.success('Connexion réussie');
    } catch (error) {
        console.log(error);
        toast.error('connection échouée')
    }
}

const handleAdd = async (e) => {
    e.preventDefault();
    try {
        const response = await inscriptionService.AddInscription(inscription)
        toast.success("Votre inscription est confirmé M." + inscription.nom + inscription.prenom)
    } catch (e) {
       console.log(e); 
    }
}
    

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
                            <input type="email" name='emailco' placeholder="E-mail" value={connexion.emailco} onChange={handleChangeConn}/>
                            <input type="password" name='passwordco' value={connexion.passwordco} placeholder="Mot de passe" onChange={handleChangeConn}/>
                            <input className="btn-user" type="submit" value="Connexion" onClick={handleConn}/>
                            <p>Mot de passe oublié ? <a href="#" className='laclasse-a'>Redefinir mot de passe</a></p>
                            <p>Pas de compte ? <a href="#" id="create" className='laclasse-a' onClick={()=>{
                                setUserContent(false)
                                setUserRegister(true)
                            }}>Créer un compte</a></p>
                        </div>
                        <div className={userRegister==true?`user-container-register active`:`user-container-register`}>
                            <h2>Inscrivez-vous</h2>
                            <input type="email" name='email' value={inscription.email} placeholder="E-mail" onChange={handleChange} />
                            <input type="password" name='password' value={inscription.password} placeholder="Mot de passe" onChange={handleChange}/>
                            <input type="text" name='nom' value={inscription.nom} placeholder="Nom" onChange={handleChange}/>
                            <input type="text" name='prenom' value={inscription.prenom} placeholder="Prénom" onChange={handleChange}/>
                            <input type="text" name='adresse' value={inscription.adresse} placeholder="Votre adresse" onChange={handleChange}/>
                            <input type="number"  name='numero' value={inscription.numero} placeholder="Numéro de téléphone" onChange={handleChange}/>
                            <input className="btn-user"  type="submit"  value="S'inscrire" onClick={handleAdd}/>
                            <p>Déjà un compte ? <a href="#" id="connexion" className='laclasse-a' onClick={()=>{
                                setUserContent(true)
                                setUserRegister(false)
                            }}>Se Connecter</a></p>
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