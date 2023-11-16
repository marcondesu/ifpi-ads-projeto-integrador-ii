import "./Signup.css";
import { PiKey, PiCalendar, PiGenderMale } from "react-icons/pi";
import { HiOutlineEnvelope, HiOutlineUser } from "react-icons/hi2";
import { BiLogoFacebook } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import InputWithIcon from "../../components/Input";
import SocialListItem from "../../components/SocialListItem";
import SubmitButton from "../../components/SubmitButton";
import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    data: "",
    genero: "",
    senha: "",
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
        "http://localhost:3000/paciente",
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
          Acompanhe seu progresso em busca do autocuidado
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
          type="email"
          placeholder="E-mail"
          onChange={(e) => handleChange(e, "email")}
        />
        <InputWithIcon
            icon={<PiGenderMale />}
            type="text"
            placeholder="CPF"
            onChange={(e) => handleChange(e, "cpf")}
          />
        </div>

        <div style={{ width: "70%", display: "flex", gap: "1rem" }}>
          <InputWithIcon
            icon={<PiCalendar />}
            type="date"
            placeholder="Data"
            onChange={(e) => handleChange(e, "nascimento")}
          />

          <InputWithIcon
            icon={<PiGenderMale />}
            type="text"
            placeholder="Gênero"
            onChange={(e) => handleChange(e, "sexo")}
          />
        </div>

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

export default Signup;
