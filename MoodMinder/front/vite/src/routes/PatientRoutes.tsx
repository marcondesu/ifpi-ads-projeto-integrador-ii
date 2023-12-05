import { Routes, Route } from 'react-router-dom';
import Signup from '../screens/patient/Signup/Signup';
import Login from '../screens/common/Login/Login';
import EmotionForm from '../screens/patient/EmotionForm/EmotionForm';
import HistoryList from '../screens/patient/HistoryList/HistoryList';
import Settings from '../screens/common/Settings/Settings';
import FollowUp from '../screens/patient/FollowUp/FollowUp';
import EmotionDetails from '../screens/patient/EmotionDetails/EmotionDetails';
import { UserTypeSelection } from '../screens/common/Start/Start';

const PatientRoutes = () => {
    return (
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
        </Routes>
    );
};

export default PatientRoutes;
