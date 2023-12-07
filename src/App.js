import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Map from "./Components/Map";
import PageContact from "./Views/PageContact";
import Modal from 'react-modal';
import DevisProfessionnel from "./Views/DevisProfessionnel";
import ReservationSite from "./Views/ReservationSite";
import PageLocalisation from "./Views/PageLocalisation";

// Définir l'élément racine de votre application pour le composant Modal
Modal.setAppElement('#root');




function App() {
  return <>
  
    <BrowserRouter>  
      <Header/>  
      <Routes>

        <Route path={"/contact"} element={<PageContact/>} />
        <Route path={"/localisation"} element={<PageLocalisation/>} />
        <Route path={"/map"} element={<Map/>} />
        <Route path={"/devisPro"} element={<DevisProfessionnel/>} />
        <Route path={"/ReservationSite"} element={<ReservationSite/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  </>
}

export default App;
