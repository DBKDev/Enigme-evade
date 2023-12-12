import React, { useEffect, useState } from 'react';
import "../Styles/TableComponent.css";
import Tableau from "../Services/tableausiteService"
const TableComponent = () => {

  const [tableausite, setTableausite] = useState([]);

  const fetchTableauSite = async () => {
    try {
      const response = await Tableau.getTableauSite();
      console.log(response);
      setTableausite(response.data)
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchTableauSite();
  }, [])

  return (
    
      <div className='tr-papa'>
          {tableausite.map(tableau => {
            return (
              <div className='Tr-class'>
                <p>Date : {tableau.res_dateHeure}</p>
                <p>Nombre de joueurs : {tableau.res_nbPersonne}</p>
                <p>Montant Total : {tableau.res_montant}</p>
                <p>Niveau Choisis : {tableau.res_niveau}</p>
              </div>
            )
          })}
      </div>
  );
};

export default TableComponent;
