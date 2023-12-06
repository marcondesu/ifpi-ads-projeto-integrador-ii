import BottomBar from "../../../components/SideBar/SideBarDoctor";
import ComplexGrid from "../../../components/PatientDash/PatientsList";
import FollowPatient from "../../../components/PatientDash/FollowPatient";

const PatientDash = () => {
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
          <FollowPatient />
        </div>
        <div className="conexoes" style={{ maxHeight: "50vh" }}>
          <h1>Conecte-se com outros pacientes</h1>
          <ComplexGrid />
        </div>
      </div>
    </div>
  );
};

export default PatientDash;
