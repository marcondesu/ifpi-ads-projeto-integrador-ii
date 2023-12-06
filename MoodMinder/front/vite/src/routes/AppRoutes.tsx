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
import FeedbackList from "../screens/patient/Feedbacks/Feedback";
import PFeedbackList from "../screens/patient/Feedbacks/ProfFeedback";
import PacientDetails from "../screens/doctor/PatientsDetail/PatientsDetail";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserTypeSelection />} />
                <Route path="/cadastro" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/configuracoes" element={<Settings />} />
                <Route path="/acompanhamentos" element={<FollowUp />} />
                <Route path="/acompanhamentos/:id" element={<EmotionDetails />} />

                <Route path="/formulario" element={<EmotionForm />} />
                <Route path="/historico" element={<HistoryList />} />
                <Route path="/historico/:id" element={<EmotionDetails />} />

                <Route path="/feedback" element={<FeedbackList />} />
                <Route path="/profissional/feedbacks" element={<PFeedbackList />} />

                <Route path="/profissional/cadastro" element={<SignupProfissional />} />
                <Route path="/profissional/login" element={<LoginDoctor />} />
                <Route path="profissional/configuracoes" element={<SettingsDoctor />} />
                <Route path="/profissional/acompanhamentos" element={<PatientDash />} />
                <Route path="/profissional/acompanhamentos/emocoes" element={<PacientDetails />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes
