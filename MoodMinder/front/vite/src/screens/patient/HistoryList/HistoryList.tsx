import BottomBar from "../../../components/SideBar/SideBarPatient";
import ComplexGrid from "../../../components/EmotionDash/EmotionList";
import { Link } from "react-router-dom";

const HistoryList = () => {
  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
      <BottomBar />
      <div className="content-container">
        <h1>Cadastre um registro</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between', gridTemplateColumns: "1fr 1fr", height: '20%', color: 'white', gap: "1rem"}}>
          <div className="redirectCard" style={{ background: '#1234', width: '60%', borderRadius: '10px' }}>
            COMO VOCÊ ESTÁ SE SENTINDO?
              <Link to={"/formulario"}>
              <button>ADICIONE EMOÇÃO</button>
              </Link>
          </div>

          <div className="lastPost" style={{ width: '40%', background: 'black', borderRadius: '10px' }}>
            ÚLTIMO REGISTRO
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
