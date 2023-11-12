import "./Signup.css";
import { PiKey } from "react-icons/pi";
import { HiOutlineEnvelope, HiOutlineUser } from "react-icons/hi2";
import { BiLogoFacebook } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate()

  const goLogin = () => {
    navigate("/login")
  }
  
  return (
    <div className="container">
      <div className="header">
        <div className="text">
          Acompanhe seu progresso em busca do autocuidado
        </div>
      </div>

      <ul className="social-list">
        <li
          style={{
            background: "blue",
            color: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <BiLogoFacebook />
          <span>Facebook</span>
        </li>
        <li
          style={{
            background: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <FcGoogle />
          <span>Google</span>
        </li>
      </ul>

      <div className="underline" style={{ fontSize: "10pt" }}>
        <div className="left-u"></div>
        <p>ou</p>
        <div className="right-u"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <HiOutlineUser />
          <input type="text" placeholder="Nome" />
        </div>

        <div className="input">
          <HiOutlineEnvelope />
          <input type="email" placeholder="E-mail"></input>
        </div>

        <div className="input">
          <PiKey />
          <input type="password" placeholder="Senha"></input>
        </div>
      </div>

      <div className="submit-container">
        <span>Cadastar</span>
      </div>

      <div className="has-account">
        Já tem uma conta?
        <span onClick={goLogin}> Clique aqui</span>
      </div>
    </div>
  );
};

export default Signup;