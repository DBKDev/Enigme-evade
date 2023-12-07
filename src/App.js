import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Slideaccueil from "./Components/Slideraccueil";
import PageAccueil from "./Views/PageAccueil";
import Map from "./Components/Map";
import FormContact from "./Components/FormContact";
import PageContact from "./Views/PageContact";
import Modal from 'react-modal';

// Définir l'élément racine de votre application pour le composant Modal
Modal.setAppElement('#root');


import DevisProfessionnel from "./Views/DevisProfessionnel";
import ReservationSite from "./Views/ReservationSite";

function App() {
  return <>
  
    <BrowserRouter>  
      <Header/>  
      <Routes>

        <Route path={"/contact"} element={<PageContact/>} />
        <Route path={"/map"} element={<Map/>} />
        <Route path={"/devisPro"} element={<DevisProfessionnel/>} />
        <Route path={"/ReservationSite"} element={<ReservationSite/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  </>
}

export default App;
