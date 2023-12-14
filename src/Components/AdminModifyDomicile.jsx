import React, { useEffect } from 'react';
import '../Styles/Admin.css';
import { useState } from 'react';
import escapeService from '../Services/escapeService';
import imageDetailsService from '../Services/imageDetailsService';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const ModifyDomicile = () => {
    const { id } = useParams();
    const [escape, setEscape] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDetailsDomicile = async () => {
            try {
                const response = await escapeService.getDetailsDomicile(id);
                setEscape(response.data.escapeSite[0]);
            } catch (error) {
                console.log(error);
            }
        };

        fetchDetailsDomicile();
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
            await escapeService.modifyEscapeDomicile(id, escape);
            toast.success("Le jeu a bien été modifié.")
            navigate(`/domicile/${id}`);
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
                    id="dom_nom"
                    name="dom_nom"
                    value={escape.dom_nom || ''}
                    onChange={handleInputChange}
                />
                <div className='separation_titre_details_admin'></div>
            </div>

            <div className='site_domicile_admin'>
                <p className='site_domicile_text_admin'>A DOMICILE</p>
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
                                id="dom_synopsis"
                                name="dom_synopsis"
                                value={escape.dom_synopsis || ''}
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
                                id="dom_objectif"
                                name="dom_objectif"
                                value={escape.dom_objectif || ''}
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

export default ModifyDomicile;