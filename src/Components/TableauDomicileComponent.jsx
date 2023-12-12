import React, { useEffect, useState } from 'react';
import "../Styles/TableComponent.css";
import Tableau from "../Services/tableausiteService"

const TableComponentDomicile = () => {

  const [tableaudomicile, setTableaudomicile] = useState([]);

  const fetchTableauDomicile = async () => {
    try {
      const response = await Tableau.getTableauDomicile();
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

export default TableComponentDomicile;
