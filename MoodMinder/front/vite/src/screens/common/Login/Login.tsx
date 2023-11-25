import "./Login.css";
import { PiKey } from "react-icons/pi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { BiLogoFacebook } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import InputWithIcon from "../../../components/Input";
import SubmitButton from "../../../components/SubmitButton";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const goSignup = () => {
    navigate("/");
  };

  const goForm = async () => {
    try {
      const response = await axios.post("https://ifpi-projeto-integrador-ii.onrender.com/auth/login", {
        email: email,
        senha: senha,
      });

      localStorage.setItem('token', response.data.access_token);      
      navigate("/emotionform");
      
    } catch (error: any) {
      console.log("Erro ao fazer login:", error.message);
      // Adicione lógica para lidar com erros de login
    }
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputWithIcon
          icon={<PiKey />}
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>

      <SubmitButton onClick={goForm} label={"Acessar"} />

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
