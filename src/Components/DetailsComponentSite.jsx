import React, { useEffect } from 'react';
import '../Styles/Details.css';
import { useState } from 'react';
import escapeService from '../Services/escapeService';
import imageDetailsService from '../Services/imageDetailsService';
import { useParams } from 'react-router-dom';


const DetailsComponent = () => {
    const { id } = useParams();
    const [escape, setEscape] = useState([]);
    const [imageDetails, setImageDetails] = useState([]);


    const fetchDetailsSite = async () => {
        try {
            const response = await escapeService.getDetailsSite(id);
            //console.log(response.data[0]);
            setEscape(response.data.escapeSite[0]);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchDetailsSiteImage = async () => {
        try {
            const response = await imageDetailsService.getImageSite(id);
            console.log(response.data.imageDetails);
            setImageDetails(response.data.imageDetails);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchDetailsSite();
        fetchDetailsSiteImage();
    }, []);

    //déclarer le modal
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalOpen(false);
    };


    return <>

        <div className='details_all_container'>

            <div className='titre_container'>
                <h2 className='titre_details'>{escape.salle_nom}</h2>
                <div className='separation_titre_details'></div>
            </div>

            <div className='site_domicile'>
                <p className='site_domicile_text'>SUR SITE</p>
            </div>
            <div className='details_container'>

                {/* DIV QUI CONTIENT LES 3 IMAGES */}
                {/* <div className='image_container'>
                    <div className='img_container'>
                        <div className='img1' onClick={() => openModal(process.env.PUBLIC_URL + "/Images/photos_escape/throne1_low.png")}>
                            <img src={process.env.PUBLIC_URL + "/Images/photos_escape/throne1_low.png"} alt="" />
                        </div>
                        <div className='img2' onClick={() => openModal(process.env.PUBLIC_URL + "/Images/photos_escape/throne2_low.png")}>
                            <img src={process.env.PUBLIC_URL + "/Images/photos_escape/throne2_low.png"} alt="" />
                        </div>
                        <div className='img3' onClick={() => openModal(process.env.PUBLIC_URL + "/Images/photos_escape/throne3_low.png")}>
                            <img src={process.env.PUBLIC_URL + "/Images/photos_escape/throne3_low.png"} alt="" />
                        </div>
                    </div>
                </div> */}

                <div className='image_container'>
                    <div className='img_container'>
                        {imageDetails.map((imageName, index) => (
                            <div key={index} className={`img${index + 1}`} onClick={() => openModal(process.env.PUBLIC_URL + `/Images/photos_escape/${imageName.image_nom}.png`)}>
                                <img src={process.env.PUBLIC_URL + `/Images/photos_escape/${imageName.image_nom}.png`} alt="" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* DIV QUI CONTIENT LE SYNOPSIS ET L'OBJECTIF */}
                <div className='synopsis_obj_container'>
                    <div className='synopsis'>
                        <div className='synopsis_titre'>
                            <h2>Synopsis</h2>
                        </div>
                        <div className='synopsis_text'>
                            <p>
                                {escape.salle_synopsis}
                            </p>
                        </div>
                    </div>

                    <div className='objectif'>
                        <div className='objectif_titre'>
                            <h2>Objectif final</h2>
                        </div>
                        <div className='objectif_text'>
                            <p>
                                {escape.salle_objectif}
                            </p>
                        </div>
                    </div>

                </div>

                <div className='temps_difficulte_container'>
                    <div className='temps_container'>
                        <div className='temps_image'>
                            <img src={process.env.PUBLIC_URL + "/Images/timer.png"} alt="" />
                        </div>

                        <p className='temps_text'>1h30</p>

                    </div>

                    <div className='difficulte_container'>
                        <div className='difficulte_titre'>
                            <h3>Difficulté :</h3>
                        </div>
                        <div className='difficulte_image'>
                            <img src={process.env.PUBLIC_URL + "/Images/1etoiles.png"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/Images/2etoiles.png"} alt="" />
                            <img src={process.env.PUBLIC_URL + "/Images/3etoiles.png"} alt="" />
                        </div>
                    </div>
                </div>
                <button className="bouton_reservation_details" type="submit">RÉSERVER MAINTENANT</button>
            </div>

            {modalOpen && (
                <div className='modal' onClick={closeModal}>
                    <span className='close' onClick={(e) => { e.stopPropagation(); closeModal(); }}>
                        &times;
                    </span>
                    <div className='modal-content-container'>
                        <img className='modal-content' src={selectedImage} alt="Modal" />
                    </div>
                </div>
            )}

        </div>

    </>;
}

export default DetailsComponent;