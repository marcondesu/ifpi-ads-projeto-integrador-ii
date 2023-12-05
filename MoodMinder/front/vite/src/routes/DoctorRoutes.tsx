import { Routes, Route } from 'react-router-dom';
import SignupProfissional from '../screens/doctor/SignupProfissional/Signup';
import LoginDoctor from '../screens/common/Login/LoginDoctor';
import SettingsDoctor from '../screens/common/Settings/SettingsDoctor';
import PatientDash from '../screens/doctor/PatientsDash/PatientsDash';

const DoctorRoutes = () => {
    return (
        <Routes>
            <Route path="/profissional/cadastro" element={<SignupProfissional />} />
            <Route path="/profissional/login" element={<LoginDoctor />} />
            <Route path="profissional/configuracoes" element={<SettingsDoctor />} />
            <Route path="/profissional/acompanhamentos" element={<PatientDash />} />
        </Routes>
    );
};

export default DoctorRoutes;
