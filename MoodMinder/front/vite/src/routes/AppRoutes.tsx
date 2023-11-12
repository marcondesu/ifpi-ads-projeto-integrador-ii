import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../screens/Signup/Signup";
import Login from "../screens/Login/Login";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Signup />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes
