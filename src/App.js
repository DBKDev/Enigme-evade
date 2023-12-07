import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageAccueil from "./Views/PageAccueil";
import Map from "./Components/Map";
import PageContact from "./Views/PageContact";
import Modal from 'react-modal';
import DevisProfessionnel from "./Views/DevisProfessionnel";
import ReservationSite from "./Views/ReservationSite";
import MonCompte from "./Views/MonCompte";
import PageDomicile from "./Views/PageDomicile";

// Définir l'élément racine de votre application pour le composant Modal
Modal.setAppElement('#root');





function App() {
  return <>
  
    <BrowserRouter>  
      <Routes>
        <Route path={"/"} element={<PageAccueil/>} />
        <Route path={"/contact"} element={<PageContact/>} />
        <Route path={"/map"} element={<Map/>} />
        <Route path={"/devisPro"} element={<DevisProfessionnel/>}/>
        <Route path={"/ReservationSite"} element={<ReservationSite/>}/>
        <Route path={"/Domicile"} element={<PageDomicile/>}/>
        <Route path={"/monCompte"} element={<MonCompte/>}/>
      </Routes>
    </BrowserRouter>

  </>
}

export default App;
