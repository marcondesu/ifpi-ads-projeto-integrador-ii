import BottomBar from "../../../components/SideBar/SideBarPatient";
import ComplexGrid from "../../../components/ProfissionalDash/ProfList";
import FollowProf from "../../../components/ProfissionalDash/FollowProf";
import "./FollowUp.css";

const FollowUp = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <BottomBar />
      <div className="content-container">
        <div className="acompanhamentos" style={{ maxHeight: "50vh" }}>
          <h1>Seus acompanhamentos</h1>
          <FollowProf />
        </div>
        <div className="conexoes" style={{ maxHeight: "50vh" }}>
          <h1>Conecte-se com outros profissionais</h1>
          <ComplexGrid />
        </div>
      </div>
    </div>
  );
};

export default FollowUp;
