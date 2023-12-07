import React from 'react';
import '../Styles/DevisPro.css'

const DevisProfessionnel = () => {
    return (<>
    
        <div className='divProMargin'>
            <h2>DEVIS PROFESSIONNELS</h2>
            <div className='devisProSouligne'></div>
        </div>
        <div className='devisProContainer'>
        <form className='devisProFlex'>
            <select id="escapeGame">
                <option value="" disabled selected>Choisissez votre escape Game</option>
                <optgroup label="Domicile">
                    <option value="domicile-1">Escape Game 1</option>
                    <option value="domicile-2">Escape Game 2</option>
                    <option value="domicile-3">Escape Game 3</option>
                    <option value="domicile-4">Escape Game 4</option>
                </optgroup>
                <optgroup label="Sur Site">
                    <option value="site-1">Escape Game 1</option>
                    <option value="site-2">Escape Game 2</option>
                    <option value="site-3">Escape Game 3</option>
                    <option value="site-4">Escape Game 4</option>
                </optgroup>
            </select>

    
            <select id="difficulty">
                <option value="" disabled selected>Choisissez votre difficulté</option>
                <option value="facile">Facile</option>
                <option value="intermediaire">Intermédiaire</option>
                <option value="difficile">Difficile</option>
            </select>

            <input type="text" placeholder='Nom'/>
            <input type="text" placeholder='Prénom'/>
            <input type="email"  placeholder='Adresse email'/>
            <input type="text" placeholder="Lieu de l'événement"/>
            <input type="number" placeholder='Numéro de téléphone' maxLength={'10'}/>
            <input type="text" placeholder='Date souhaitée' />

            <input type="submit" value={'ENVOYER'} />
        </form>
        </div>
    </>);
}
 
export default DevisProfessionnel;