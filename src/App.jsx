import "remixicon/fonts/remixicon.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutPage from "./components/Pages/AboutPage";
import Services from "./components/Pages/Services";
import CyberSecurity from "./components/Pages/CyberSecurity";
import ComprehensiveTraining from "./components/Pages/ComprehensiveTraining";
import TrainingAchievement from "./components/Pages/TrainingAchievement";
import SyllabusDetails from "./components/Pages/SyllabusDetails";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path="/service" element={<Services/>}/>
        <Route path="/cyber-security" element={<CyberSecurity/>}/>
        <Route path="/comprehensive-training" element={<ComprehensiveTraining/>}/>
        <Route path="/training-achievement/:id" element={<TrainingAchievement/>} />
        <Route path="/training-achievement/:id/syllabus" element={<SyllabusDetails/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
