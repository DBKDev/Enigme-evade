import React, { useEffect, useState } from 'react';
import "../Styles/InterfaceAdmin.css"
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import imageAccueil from '../Services/imageAccueil';
import escapeService from '../Services/escapeService';

const InterfaceAdmin = () => {
    const [images, setImages] = useState([]);
    const [nomDom, setNomDom] = useState([]);
    const [nomSite, setNomSite] = useState([]);

    // Affichage des images pour les 8 dernières nouveautées
    const fetchImageAccueil = async () => {
        try {
            const response = await imageAccueil.getImageAccueil();
            console.log(response.data);
            setImages(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    const fetchNomDom = async () => {
        try {
            const response = await escapeService.getNomDomicile();
            setNomDom(response.data);
            console.log(response.data[0].dom_nom);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchNomSite = async () => {
        try {
            const response = await escapeService.getNomSite();
            setNomSite(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchImageAccueil();
        fetchNomDom();
        fetchNomSite();
    },  []);

    // Divise le tableau en deux parties
    const imageDom = images.slice(0, 4);
    const imageSite = images.slice(4);
    return <>
    <Header/>
    
    <div className='containerprincipaleAdmin'>
            <div className='AdminMargin'>
                <h2>Interface Administrateur</h2>
                <div className='AdminSouligne'></div>
            </div>
            <div className='AdminContainer'>
               <div className="escape-modification">
                
               <div className="update-escape-img" >
                    {/* Les quatre premières images */}
                    {imageDom.map((image, index) => (
                        <div key={index} className="card-admin">
                            <div className="img-container">
                            <a href={`/modifDom/${image.domicile_id}`}>
                                <img src={process.env.PUBLIC_URL + `/Images/photos_escape/${image.image_nom}.png`} alt={image.alt} width={'300px'} height={'200px'} className='img-jeu-admin' />
                                <div class="img-title">{nomDom[index]?.dom_nom}</div>
                                
                            </a>
                            </div>
                        </div>
                    ))}

                    {/* Les autres images */}
                    {imageSite.map((image, index) => (
                        <div key={index} className="card-admin">
                            <div className="img-container">
                            <a href={`/modifSite/${image.salle_id}`}>
                                <img src={process.env.PUBLIC_URL + `/Images/photos_escape/${image.image_nom}.png`} alt={image.alt} width={'300px'} height={'200px'} className='img-jeu-admin' />
                                <div class="img-title">{nomSite[index]?.salle_nom}</div>
                            </a>
                            </div>
                        </div>
                    ))}
                </div>
                
               </div>
               <div className="tableau">

               </div>
            </div>
            </div>

            <Footer/>
    
    
    </>;
}
 
export default InterfaceAdmin;