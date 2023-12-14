import React, {useState} from 'react';
import '../Styles/minijeu.css'



const MiniJeu = () => {

    const [reponse, setReponse] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [message, setMessage] = useState('');
    const [currentPuzzle, setCurrentPuzzle] = useState(0);
    const [reponseNumber, setReponseNumber] = useState('')

    const hints = [
        'Mon premier chiffre est le nombres de joueurs maximum que peut contenir nos salles', // Indice pour la première énigme
        'Mon deuxième est un nombre qui correspond au temps en minutes de nos sessions d\'escape game ', // Indice pour la deuxième énigme
        'Mon troisième chiffre est  0' // Indice pour la troisième énigme
];





function checkAnswer () {

            if (reponseNumber === 8900) {
                setAttempts(0); // Réinitialiser les tentatives pour la prochaine énigme
                setMessage('Bien joué !');
                
            }  else {
                setAttempts(attempts+1);
                if (attempts + 1 <= 3) {
                    setMessage(`Mauvaise réponse. Indice : ${hints[currentPuzzle]}`);
                    setCurrentPuzzle(currentPuzzle + 1);
                } else {
                    setMessage('Trop de tentatives. Vous avez échoué');
                    // Passer à la prochaine énigme même en cas de trop d'essais
                }
            } 
};

const handleInputChange = (e) => {
    setReponseNumber(parseInt(e.target.value));
}



    return (
        <>
        <div className='miniJeu1'>
          <h1>Mini-Jeu : Escape Game</h1>
          <p>Essayer de trouver un code a 4 chiffres !</p>
          <p>{}</p>
          <input type="text" value={reponseNumber} maxLength={4} onChange={handleInputChange}/>
          <button onClick={checkAnswer}>Soumettre</button>
          <p>{message}</p>
          </div>
        </>
      );
    };
 
export default MiniJeu;