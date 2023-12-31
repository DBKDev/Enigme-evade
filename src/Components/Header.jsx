import React, { useContext, useEffect, useState } from 'react';
import "../Styles/Header.css"
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import inscriptionService from '../Services/inscriptionService';
import connexionService from '../Services/connexionService';
import GlobalContext from './GlobalContext';
import testService from '../Services/testService';
import { useNavigate } from 'react-router-dom';
import ModalDeco from './ModalDeconnexion';

const Header = () => {


    const [test, setTest] = useState([]);
    const { userEmail, setUserEmail, user, setUser } = useContext(GlobalContext);
    const [userContent, setUserContent] = useState(false)
    const [userRegister, setUserRegister] = useState(false)
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            
            // Check if parsedUser is truthy before accessing its properties
            if (parsedUser) {
                setUserEmail(parsedUser.user_email || '');
                setUser(parsedUser);
            }
        }
    }, [setUser, setUserEmail]);

    const [inscription, setInscription] = useState({
        nom: "",
        prenom: "",
        email: "",
        password: "",
        adresse: "",
        numero: "",
    });


    const [connexion, setConnexion] = useState({
        emailco: "",
        passwordco: "",
    });


    const handleChangeConn = (e) => {
        const { name, value } = e.currentTarget;
        setConnexion({ ...connexion, [name]: value });
        console.log(connexion);
    }

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        setInscription({ ...inscription, [name]: value });
        console.log(inscription);
    }

    const handleConn = async (e) => {
        e.preventDefault();
        try {
            const response = await connexionService.AddConnexion(connexion);
            setUserEmail(response.data.user.user_email);
            setUser(response.data.user);

            // Store user data in localStorage on successful login
            localStorage.setItem('user', JSON.stringify(response.data.user));

            toast.success(`Connexion réussie. Bienvenue, ${response.data.user.user_nom} ${response.data.user.user_prenom}!`);
            navigate('/monCompte');
        } catch (error) {
            console.log(error);
            toast.error('Connection échouée');
        }
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const response = await inscriptionService.AddInscription(inscription)
            toast.success("Votre inscription est confirmé M." + inscription.nom + inscription.prenom)
            navigate('/');
        } catch (e) {
            console.log(e);
        }
    }

    // TEST POUR LA CONNEXION :

    const fetchUserByEmail = async () => {
        try {
            const response = await testService.getUserByEmail(userEmail)
            setTest(response.data)

        } catch (e) {
            console.log(e);
        }
    }


// const handleChangeConn = (e) => {
//     const { name, value } = e.currentTarget;
//     setConnexion({...connexion, [name]: value });
// }

// const handleChange = (e) => {
//     const { name, value } = e.currentTarget;
//     setInscription({...inscription, [name]: value });
// }

    const disconnectUser = () => {
        // Clear stored user data on logout
        localStorage.removeItem('user');

        localStorage.clear();
        setUserEmail("");
        setUser(null);
        setShowModal(false);
        navigate('/');
        window.location.reload();
    };


    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const disconnectAndReload = () => {
        disconnectUser();
        toast.success('Déconnexion réussie');
    };

    useEffect(() => {
        // Fetch user data only if userEmail is available
        if (userEmail) {
            fetchUserByEmail();
            console.log("user data : ", user);
        }
    }, [userEmail, user]);



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
                    <Link to="/"><img src={process.env.PUBLIC_URL + "/Assets/logo_site.png"} alt="" /></Link>
                    <nav className="navigation">
                        <Link to="/" className='laclasse-a'>ACCUEIL</Link>
                        <Link to="#Tarif" className='laclasse-a'>TARIF</Link>
                        <Link to="/ReservationSite" className='laclasse-a'>RÉSERVER</Link>
                        <Link to="/contact" className='laclasse-a'>CONTACT</Link>
                        <button className="btnLogin-popup" ><a href="/Domicile" className='laclasse-btn-a'>DOMICILE</a></button>
                        <i id="user-icon" className='bx bxs-user bx-md' onClick={() => {
                            setUserContent(prevUserContent => !prevUserContent)
                            setUserRegister(false)
                        }}></i>
                        <span><Link to={`/monCompte`} className='laclasse-btn-a'>{test.user_nom}</Link></span>
                        {/* Show the disconnect button only if the user is connected */}
                        {userEmail && (
                            <i className='bx bxs-x-circle bx-md bx-tada-hover' onClick={openModal}></i>
                        )}
                        <div className={userContent == true ? `user-container active` : `user-container`}>
                            <h2>Connectez-vous</h2>
                            <input type="email" name='emailco' placeholder="E-mail" value={connexion.emailco} onChange={handleChangeConn} />
                            <input type="password" name='passwordco' value={connexion.passwordco} placeholder="Mot de passe" onChange={handleChangeConn} />
                            <input className="btn-user" type="submit" value="Connexion" onClick={handleConn} />
                            <p>Mot de passe oublié ? <a href="#" className='laclasse-a'>Redefinir mot de passe</a></p>
                            <p>Pas de compte ? <a href="#" id="create" className='laclasse-a' onClick={() => {
                                setUserContent(false)
                                setUserRegister(true)
                            }}>Créer un compte</a></p>
                        </div>
                        <div className={userRegister == true ? `user-container-register active` : `user-container-register`}>
                            <h2>Inscrivez-vous</h2>
                            <input type="email" name='email' value={inscription.email} placeholder="E-mail" onChange={handleChange} />
                            <input type="password" name='password' value={inscription.password} placeholder="Mot de passe" onChange={handleChange} />
                            <input type="text" name='nom' value={inscription.nom} placeholder="Nom" onChange={handleChange} />
                            <input type="text" name='prenom' value={inscription.prenom} placeholder="Prénom" onChange={handleChange} />
                            <input type="text" name='adresse' value={inscription.adresse} placeholder="Votre adresse" onChange={handleChange} />
                            <input type="number" name='numero' value={inscription.numero} placeholder="Numéro de téléphone" onChange={handleChange} />
                            <input className="btn-user" type="submit" value="S'inscrire" onClick={handleAdd} />
                            <p>Déjà un compte ? <Link to="#" id="connexion" className='laclasse-a' onClick={() => {
                                setUserContent(true)
                                setUserRegister(false)
                            }}>Se Connecter</Link></p>
                        </div>
                    </nav>


                    {/* Show the cog icon only if the user has admin set to 1 */}
                    {user?.user_admin === 1 && (
                       <Link to={'/interface'}><i className='bx bxs-cog'></i></Link>
                    )}

                    {showModal && (
                        <ModalDeco onConfirm={disconnectAndReload} onCancel={closeModal} />
                    )}


                </header>
                <script type="module" src="./script.js"></script>
            </body>

        </>
    );

}

export default Header;
