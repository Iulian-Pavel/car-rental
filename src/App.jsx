import LandingPage from "./Pages/LandingPage";
import OurFleet from "./Pages/OurFleet";
import Admin from "./Pages/Admin/Admin";
import NotFound from "../src/Pages/NotFound";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/fleet" element={<OurFleet />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
