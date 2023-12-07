import SideBarPatient from "../../../components/SideBar/SideBarPatient";
import ComplexGrid from "../../../components/EmotionDash/EmotionList";
import { Link } from "react-router-dom";
import emotionImage from "../../../assets/logocircular.png"; // Substitua pelo caminho correto da sua imagem
import useSettings from "../../../hooks/useSettings";
import './HistoryList.css'
import { AiOutlinePlus } from "react-icons/ai";

const HistoryList = () => {
  const { dadosDoUsuario } = useSettings();

  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
      <SideBarPatient />

      <div className="content-container">
        <h1>Cadastre um registro</h1>


        <div className="redirect-card">

          <div className="img">
            <img src={emotionImage} alt="Emotion"/>
          </div>

          <div className="content">
            <div className="welcome-text">
              <h2>Olá, {dadosDoUsuario.nome}</h2>
              <p></p>
            </div>
            <div className="redirect-button">
              <Link to="/formulario">
              <span className="icon">
                  <AiOutlinePlus />
                </span>
                <button>Adicione uma emoção</button>
              </Link>
            </div>
          </div>

        </div>

        <div>
          <h1>Situações que você já viveu</h1>
          <ComplexGrid />
        </div>

      </div>
    </div>
  );
};

export default HistoryList;
