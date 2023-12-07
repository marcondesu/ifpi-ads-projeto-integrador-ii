import SideBarPatient from "../../../components/SideBar/SideBarPatient";
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
      <SideBarPatient />
      <div className="content-container">
          <h1>Seus acompanhamentos</h1>
        <div className="acompanhamentos" style={{ maxHeight: "35vh" }}>
          <FollowProf />
        </div>
          <h1>Conecte-se com outros profissionais</h1>
        <div className="conexoes" style={{ maxHeight: "35vh" }}>
          <ComplexGrid />
        </div>
      </div>
    </div>
  );
};

export default FollowUp;
