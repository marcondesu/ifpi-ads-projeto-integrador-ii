import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../screens/Signup/Signup";
import Login from "../screens/Login/Login";
import EmotionForm from "../screens/EmotionForm/EmotionForm";
import HistoryList from "../screens/HistoryList/HistoryList";
import Settings from "../screens/Settigns/Settings";
import SignupProfissional from "../screens/SignupProfissional/Signup";
import FollowUp from "../screens/FollowUp/FollowUp";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/Profissional" element={<SignupProfissional />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/EmotionForm" element={<EmotionForm />} />
                <Route path="/Historico" element={<HistoryList />} />
                <Route path="/Acompanhamento" element={<FollowUp />} />
                <Route path="/Configuracoes" element={<Settings />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes
