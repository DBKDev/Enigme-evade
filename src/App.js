import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import DevisProfessionnel from "./Views/DevisProfessionnel";
import ReservationSite from "./Views/ReservationSite";

function App() {
  return <>
  
    <BrowserRouter>  
      <Header/>  
      <Routes>
        <Route path={"/"} element={<Header/>} />
        <Route path={"/devisPro"} element={<DevisProfessionnel/>} />
        <Route path={"/ReservationSite"} element={<ReservationSite/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  </>
}

export default App;
