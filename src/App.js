import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from 'react-modal';
import PageAccueil from "./Views/PageAccueil";
import PageContact from "./Views/PageContact";
import DevisProfessionnel from "./Views/DevisProfessionnel";
import ReservationSite from "./Views/ReservationSite";
import MonCompte from "./Views/MonCompte";
import PageDomicile from "./Views/PageDomicile";
import MesReservations from "./Views/MesReservations";
import PageLocalisation from "./Views/PageLocalisation";
import PageDetails from "./Views/PageDetails";

// Définir l'élément racine de votre application pour le composant Modal
Modal.setAppElement('#root');






function App() {
  return <>
  
    <BrowserRouter>  
      <Routes>
      <Route path={"/"} element={<PageAccueil/>} />     
        <Route path={"/contact"} element={<PageContact/>} />
        <Route path={"/localisation"} element={<PageLocalisation/>} />
        <Route path={"/devisPro"} element={<DevisProfessionnel/>}/>
        <Route path={"/ReservationSite"} element={<ReservationSite/>}/>
        <Route path={"/details"} element={<PageDetails/>}/>
        <Route path={"/Domicile"} element={<PageDomicile/>}/>
        <Route path={"/monCompte"} element={<MonCompte/>}/>
        <Route path={"/MesReservations"} element={<MesReservations/>}/>
        <Route path={"/reservationSite"} element={<ReservationSite/>}/>
      </Routes>
    </BrowserRouter>

  </>
}

export default App;
