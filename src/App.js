import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Slideaccueil from "./Components/Slideraccueil";

function App() {
  return <>
  
    <BrowserRouter>    
      <Routes>
        <Route path={"/"} element={<Header/>} />
      </Routes>
      <Slideaccueil/>
      {/* <Footer/> */}
    </BrowserRouter>

  </>
}

export default App;
