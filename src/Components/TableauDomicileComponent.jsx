import React, { useEffect, useState, useContext } from 'react';
import "../Styles/TableComponent.css";
import Tableau from "../Services/tableausiteService"
import GlobalContext from '../Components/GlobalContext';
import { format } from 'date-fns';

const TableComponentDomicile = () => {

  const { userEmail, user, setUser } = useContext(GlobalContext);
  const [tableaudomicile, setTableaudomicile] = useState([]);

  const fetchTableauDomicile = async () => {
    try {
      const response = await Tableau.getTableauDomicile(userEmail);
      console.log(response);
      setTableaudomicile(response.data)
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchTableauDomicile();
  }, [])

  return (
    
      <div className='tr-papa'>
          {tableaudomicile.map(tableau => {
            return (
              <div className='Tr-class'>
                <h4>Escape choisi : {tableau.dom_nom}</h4>
                <p>N° réservation : {tableau.res_id}</p>
                <p>Date : {format(new Date(tableau.res_dateHeure), 'dd-MM-yyyy HH:mm')}</p>
                <p>Nombre de joueurs : {tableau.res_nbPersonne}</p>
                <p>Montant Total : {tableau.res_montant}</p>
                <p>Niveau Choisis : {tableau.res_niveau}</p>
              </div>
            )
          })}
      </div>
  );
};

export default TableComponentDomicile;
