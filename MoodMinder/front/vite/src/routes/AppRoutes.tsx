import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../screens/patient/Signup/Signup";
import Login from "../screens/common/Login/Login";
import EmotionForm from "../screens/patient/EmotionForm/EmotionForm";
import HistoryList from "../screens/patient/HistoryList/HistoryList";
import Settings from "../screens/common/Settings/Settings";
import SignupProfissional from "../screens/doctor/SignupProfissional/Signup";
import FollowUp from "../screens/patient/FollowUp/FollowUp";
import EmotionDetails from "../screens/patient/EmotionDetails/EmotionDetails";
import PatientDash from "../screens/doctor/PatientsDash/PatientsDash";
import LoginDoctor from "../screens/common/Login/LoginDoctor";
import SettingsDoctor from "../screens/common/Settings/SettingsDoctor";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/Profissional" element={<SignupProfissional />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/EmotionForm" element={<EmotionForm />} />
                <Route path="/Historico/:id" element={<EmotionDetails />} />
                <Route path="/Historico" element={<HistoryList />} />
                <Route path="/Acompanhamento" element={<FollowUp />} />
                <Route path="/Acompanhamento/:id" element={<EmotionDetails />} />
                <Route path="/Configuracoes" element={<Settings />} />
                <Route path="/Profissional/Acompanhamento/id" element={<SignupProfissional />} />
                <Route path="/Login/Profissional" element={<LoginDoctor />} />
                <Route path="/Profissional/Configuracoes" element={<SettingsDoctor />} />
                <Route path="/Profissional/Acompanhamento" element={<PatientDash />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes
