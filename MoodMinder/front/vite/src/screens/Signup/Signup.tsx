import "./Signup.css";
import { PiKey, PiCalendar, PiGenderMale } from "react-icons/pi";
import { HiOutlineEnvelope, HiOutlineUser } from "react-icons/hi2";
import { BiLogoFacebook } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import InputWithIcon from "../../components/Input";
import SocialListItem from "../../components/SocialListItem";
import SubmitButton from "../../components/SubmitButton";

const Signup = () => {
  const navigate = useNavigate();

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
        />

        <InputWithIcon
          icon={<HiOutlineEnvelope />}
          type="email"
          placeholder="E-mail"
        />

        <div style={{width: '70%', display: 'flex', gap: '1rem'}}>
  
        <InputWithIcon
          icon={<PiCalendar />}
          type="date"
          placeholder="Data"
        />

        <InputWithIcon
          icon={<PiGenderMale />}
          type="text"
          placeholder="Gênero"
        />
        </div>


        <InputWithIcon icon={<PiKey />} type="password" placeholder="Senha" />
      </div>

      <SubmitButton onClick={() => {}} label={"Cadastrar"} />

      <div className="has-account">
        Já tem uma conta?
        <span onClick={goLogin}> Clique aqui</span>
      </div>
    </div>
  );
};

export default Signup;
