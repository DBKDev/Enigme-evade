import React, { useEffect } from 'react';
import '../Styles/Admin.css';
import { useState } from 'react';
import escapeService from '../Services/escapeService';
import imageDetailsService from '../Services/imageDetailsService';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const ModifySite = () => {
    const { id } = useParams();
    const [escape, setEscape] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDetailsSite = async () => {
            try {
                const response = await escapeService.getDetailsSite(id);
                setEscape(response.data.escapeSite[0]);
            } catch (error) {
                console.log(error);
            }
        };

        fetchDetailsSite();
    }, [id]);

    

    const handleInputChange = (e) => {
        // Implement your input change logic here
        const { name, value } = e.target;
        setEscape((prevEscape) => ({ ...prevEscape, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Implement your submit logic here
            await escapeService.modifyEscapeSite(id, escape);
            toast.success("Le jeu a bien été modifié.")
            navigate(`/site/${id}`);
            // Redirect or show a success message after modifying data
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <div className='details_all_container_admin'>
            <div className='titre_container_admin'>
                <input
                    className='titre_details_admin'
                    type="text"
                    id="salle_nom"
                    name="salle_nom"
                    value={escape.salle_nom || ''}
                    onChange={handleInputChange}
                />
                <div className='separation_titre_details_admin'></div>
            </div>

            <div className='site_domicile_admin'>
                <p className='site_domicile_text_admin'>SUR SITE</p>
            </div>
            <div className='details_container_admin'>
                <div className='synopsis_obj_container_admin'>
                    <div className='synopsis_admin'>
                        <div className='synopsis_titre_admin'>
                            <h2>Synopsis</h2>
                        </div>
                        <div className='synopsis_text_admin'>
                            <textarea
                                className='synospis_text_admin'
                                id="salle_synopsis"
                                name="salle_synopsis"
                                value={escape.salle_synopsis || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className='objectif_admin'>
                        <div className='objectif_titre_admin'>
                            <h2>Objectif final</h2>
                        </div>
                        <div className='objectif_text_admin'>
                            <textarea
                                className='objectif_text_admin'
                                id="salle_objectif"
                                name="salle_objectif"
                                value={escape.salle_objectif || ''}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                
                {/* Add similar textarea fields for other properties */}

                <button type="submit" className='btn-admin-details'>Modifier les détails</button>
            </div>
        </div>
    </form>

    )
    
};

export default ModifySite;