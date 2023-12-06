import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return <>
  
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Header/>} />
      </Routes>
    </BrowserRouter>

  </>
}

export default App;
