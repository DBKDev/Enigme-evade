import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Slideaccueil from "./Components/Slideraccueil";
import PageAccueil from "./Views/PageAccueil";

function App() {
  return <>
  
    <BrowserRouter>    
      <Routes>
        <Route path={"/"} element={<PageAccueil/>} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>

  </>
}

export default App;
