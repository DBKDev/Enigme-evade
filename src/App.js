import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return <>
  
    <BrowserRouter>    
      <Routes>
        <Route path={"/"} element={<Header/>} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>

  </>
}

export default App;
