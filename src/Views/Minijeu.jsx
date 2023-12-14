import React from 'react';
import MiniJeu from '../Components/MiniJeu';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Styles/minijeu.css'


const Minijeu = () => {
    return ( <>
    <Header/>


    <div className=' minijeu'>
        <MiniJeu/>
    </div>
    
   
    
    
    <Footer/>
    </> );
}
 
export default Minijeu;