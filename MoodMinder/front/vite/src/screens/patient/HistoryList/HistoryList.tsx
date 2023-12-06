import BottomBar from "../../../components/SideBar/SideBarPatient";
import ComplexGrid from "../../../components/EmotionDash/EmotionList";
import { Link } from "react-router-dom";
// import emotionImage from "../../../assets/logocircular.png"; // Substitua pelo caminho correto da sua imagem

const HistoryList = () => {
  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
      <BottomBar />
      <div className="content-container">
        <h1>Cadastre um registro</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between', gridTemplateColumns: "1fr 1fr", height: '20%', color: 'white', gap: "1rem"}}>
          <div className="redirectCard" style={{ background: 'black', width: '60%', borderRadius: '10px', paddingLeft: '1rem', display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '1rem' }}>
              {/* <img src={emotionImage} alt="Emotion" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} /> */}
            </div>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Como você está se sentindo?</h2>
              <p>Registre suas emoções e acompanhe seu bem-estar ao longo do tempo.</p>
              <Link to="/formulario">
                <button style={{ padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer', background: '#fff', color: '#1234', borderRadius: '5px', border: 'none' }}>Adicione uma Emoção</button>
              </Link>
            </div>
          </div>
          <div className="lastPost" style={{ width: '40%', background: 'black', borderRadius: '10px', paddingLeft: '1rem', textAlign: 'center' }}>
            <h2>Status</h2>
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
