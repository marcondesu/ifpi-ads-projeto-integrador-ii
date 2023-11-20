import "./Signup.css";
import {
  HiOutlineEnvelope,
  HiOutlineUser,
  HiOutlineIdentification,
} from "react-icons/hi2";
import { BiLogoFacebook } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import InputWithIcon from "../../components/Input";
import SocialListItem from "../../components/SocialListItem";
import SubmitButton from "../../components/SubmitButton";
import axios from "axios";
import { useState } from "react";
import { PiKey } from "react-icons/pi";

const SignupProfissional = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    crm: "",
    especialidade: "",
    email: "",
    nascimento: "",
    sexo: "",
    senha: ""
  });

  const handleChange = (e: { target: { value: any } }, field: any) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://ifpi-projeto-integrador-ii.onrender.com/profissional",
        formData
      );
      console.log("Usuário cadastrado com sucesso:", response.data);
      navigate("/login");
    } catch (error: any) {
      console.error("Erro ao cadastrar usuário:", error.message);
    }
  };
  const goLogin = () => {
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">
          Acompanhe o progresso de seus pacientes em busca do autocuidado
        </div>
      </div>

      <ul className="social-list">
        <SocialListItem
          background="blue"
          icon={<BiLogoFacebook />}
          label="Facebook"
        />
        <SocialListItem
          background="white"
          icon={<FcGoogle />}
          label="Google"
          color="black"
        />
      </ul>

      <div className="underline" style={{ fontSize: "10pt" }}>
        <div className="left-u"></div>
        <p>ou</p>
        <div className="right-u"></div>
      </div>

      <div className="inputs">
        <InputWithIcon
          icon={<HiOutlineUser />}
          type="text"
          placeholder="Nome"
          onChange={(e) => handleChange(e, "nome")}
        />

        <div style={{ width: "70%", display: "flex", gap: "1rem" }}>
          <InputWithIcon
            icon={<HiOutlineEnvelope />}
            type="text"
            placeholder="Especialidade"
            onChange={(e) => handleChange(e, "especialidade")}
          />
          <InputWithIcon
            icon={<HiOutlineIdentification />}
            type="text"
            placeholder="CRM/CRP"
            onChange={(e) => handleChange(e, "crm")}
          />
        </div>

        <div style={{ width: "70%", display: "flex"}}>
          <div
            style={{
              width: "100%",
              display: "flex",
              height: "50px",
              gap: "1rem",
            }}
          >
            <input
              type="date"
              style={{
                width: "50%",
                borderRadius: "5px",
                padding: "16px",
                border: "none",
                backgroundColor: "#eaeaea",
                boxSizing: "border-box",
                outline: "none"
              }}
              onChange={(e) => handleChange(e, "nascimento")}
            />

            <select
              style={{
                width: "50%",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#eaeaea",
                padding: "16px",
                outline: "none"
              }}
              onChange={(e) => handleChange(e, "sexo")}
            >
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </select>
          </div>
        </div>

        <InputWithIcon
            icon={<HiOutlineEnvelope />}
            type="email"
            placeholder="E-mail"
            onChange={(e) => handleChange(e, "email")}
          />

        <InputWithIcon
          icon={<PiKey />}
          type="password"
          placeholder="Senha"
          onChange={(e) => handleChange(e, "senha")}
        />
      </div>

      <SubmitButton onClick={handleSubmit} label={"Cadastrar"} />

      <div className="has-account">
        Já tem uma conta?
        <span onClick={goLogin}> Clique aqui</span>
      </div>
    </div>
  );
};

export default SignupProfissional;
