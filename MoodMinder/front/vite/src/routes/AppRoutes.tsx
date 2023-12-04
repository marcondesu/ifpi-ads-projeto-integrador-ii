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
import { UserTypeSelection } from "../screens/common/Start/Start";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserTypeSelection />} />
                <Route path="/cadastro" element={<Signup />} />
                <Route path="/profissional" element={<SignupProfissional />} />
                <Route path="/login" element={<Login />} />
                <Route path="/emotionForm" element={<EmotionForm />} />
                <Route path="/historico/:id" element={<EmotionDetails />} />
                <Route path="/historico" element={<HistoryList />} />
                <Route path="/acompanhamento" element={<FollowUp />} />
                <Route path="/acompanhamento/:id" element={<EmotionDetails />} />
                <Route path="/configuracoes" element={<Settings />} />
                <Route path="/profissional/Acompanhamento/id" element={<SignupProfissional />} />
                <Route path="/login/Profissional" element={<LoginDoctor />} />
                <Route path="/profissional/Configuracoes" element={<SettingsDoctor />} />
                <Route path="/profissional/Acompanhamento" element={<PatientDash />} />
                </Routes>
        </Router>
    )
}

export default AppRoutes
