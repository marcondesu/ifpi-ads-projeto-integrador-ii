import './Login.css'
import { PiKey } from "react-icons/pi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { BiLogoFacebook } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Bem vindo(a) de volta ao MoodMinder </div>
      </div>

      <div className="inputs">
        <div className="input">
          <HiOutlineEnvelope />
          <input type="email" placeholder="E-mail"></input>
        </div>

        <div className="input">
          <PiKey />
          <input type="password" placeholder="Senha"></input>
        </div>
      </div>

      <div className="forgot-password">
        <span>Esqueci minha senha</span>
      </div>

      <div className="submit-container">
        <span>Acessar</span>
      </div>
      
      <div className="underline" style={{fontSize: '10pt'}}>ou</div>

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

    </div>
  );
};

export default Login;
