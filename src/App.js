import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Map from "./Components/Map";
import FormContact from "./Components/FormContact";
import PageContact from "./Views/PageContact";
import Modal from 'react-modal';

// Définir l'élément racine de votre application pour le composant Modal
Modal.setAppElement('#root');



function App() {
  return <>
  
    <BrowserRouter>    
      <Routes>

        <Route path={"/contact"} element={<PageContact/>} />
        <Route path={"/map"} element={<Map/>} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>

  </>
}

export default App;
