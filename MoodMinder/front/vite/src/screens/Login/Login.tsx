import "./Login.css";
import { PiKey } from "react-icons/pi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { BiLogoFacebook } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import InputWithIcon from "../../components/Input";
import SubmitButton from "../../components/SubmitButton";

const Login = () => {
  const navigate = useNavigate();

  const goSignup = () => {
    navigate("/");
  };

  const goForm = () => {
    navigate("/emotionform");
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Bem vindo(a) de volta ao MoodMinder </div>
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
        <InputWithIcon
          icon={<HiOutlineEnvelope />}
          type="email"
          placeholder="E-mail"
        />
        <InputWithIcon icon={<PiKey />} type="password" placeholder="Senha" />
      </div>

      <SubmitButton
        onClick={goForm}
        label={"Acessar"}
      />

      <div className="forgot-password">
        <span>Esqueci minha senha</span>
      </div>

      <div className="no-has-account">
        Ainda não tem uma conta?
        <span onClick={goSignup}> Clique aqui</span>
      </div>
    </div>
  );
};

export default Login;
