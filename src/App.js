import { BrowserRouter, Routes, Route } from "react-router-dom";
import Globalcontext from '../src/Components/GlobalContext';
import Modal from 'react-modal';
import { useState , useEffect} from "react";
import PageAccueil from "./Views/PageAccueil";
import PageContact from "./Views/PageContact";
import MonCompte from "./Views/MonCompte";
import PageDomicile from "./Views/PageDomicile";
import MesReservations from "./Views/MesReservations";
import PageLocalisation from "./Views/PageLocalisation";
import PageDetailsSite from "./Views/PageDetailsSite";
import InterfaceAdmin from "./Views/InterfaceAdmin";
import ReservationDomicile from "./Views/ReservationDomicile";
import DevisProfessionnel from "./Views/DevisProfessionnel";
import ReservationSite from "./Views/ReservationSite";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import GlobalContext from "./Context/GlobalContext";
import PageDetailsDomicile from "./Views/PageDetailsDomicile";
import Minijeu from "./Views/Minijeu";

import MonCompte2 from "./Views/MonCompte2";
import PageAdminUpdateDomicile from "./Views/AdminUpdateDomicile"
import PageAdminUpdateSite from "./Views/AdminUpdateSite";
import MentionsLegal from "./Views/MentionsLegal";
import PolitiqueConfidentialite from "./Views/PolitiqueConfidentialité";
import ConditionsVente from "./Views/ConditionsVente";


// Définir l'élément racine de votre application pour le composant Modal
Modal.setAppElement('#root');






function App() {

  // Initialisez l'état userEmail en récupérant la valeur depuis le localStorage
 const [userEmail, setUserEmail] = useState(window.localStorage.getItem('userEmail'));
 const [user, setUser] = useState(null);

// Effet pour mettre à jour le localStorage lorsque userId change
useEffect(() => {
  if (userEmail !== null) {
    localStorage.setItem('userEmail', userEmail.toString());
  } else {
    // Si userEmail est null, supprimez-le du localStorage
    localStorage.removeItem('userEmail');
  }
}, [userEmail]);
  return <>
     <Globalcontext.Provider value={{userEmail, setUserEmail, user, setUser}}>
    <BrowserRouter>  
      <Routes>
      <Route path={"/"} element={<PageAccueil/>} />     
        <Route path={"/contact"} element={<PageContact/>} />
        <Route path={"/localisation"} element={<PageLocalisation/>} />
        <Route path={"/devisPro"} element={<DevisProfessionnel/>}/>
        <Route path={"/ReservationSite"} element={<ReservationSite/>}/>
        <Route path={"/site/:id"} element={<PageDetailsSite/>}/>
        <Route path={"/domicile/:id"} element={<PageDetailsDomicile/>}/>
        <Route path={"/Domicile"} element={<PageDomicile/>}/>
        <Route path={"/monCompte"} element={<MonCompte2/>}/>
        <Route path={"/interface"} element={<InterfaceAdmin/>}/>
        <Route path={"/reservationDomicile"} element={<ReservationDomicile/>}/>
        <Route path={"/MesReservations"} element={<MesReservations/>}/>
        <Route path={"/reservationSite"} element={<ReservationSite/>}/>
        <Route path={"/minijeu"} element={<Minijeu/>}/>
        <Route path={"/modifSite/:id"} element={<PageAdminUpdateSite/>}/>
        <Route path={"/modifDom/:id"} element={<PageAdminUpdateDomicile/>}/>
        <Route path={"/MentionsLegal"} element={<MentionsLegal/>}/>
        <Route path={"/PolitiqueConfidentialite"} element={<PolitiqueConfidentialite />}/>
        <Route path={"/ConditionsVente"} element={<ConditionsVente />}/>
      </Routes>
    </BrowserRouter>
    </Globalcontext.Provider>
    <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
    />

  </>
}

export default App;
