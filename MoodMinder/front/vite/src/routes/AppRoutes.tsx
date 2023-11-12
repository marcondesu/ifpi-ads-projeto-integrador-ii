import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../screens/Signup/Signup";
import Login from "../screens/Login/Login";
import EmotionForm from "../screens/EmotionForm/EmotionForm";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/EmotionForm" element={<EmotionForm />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Signup />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes
