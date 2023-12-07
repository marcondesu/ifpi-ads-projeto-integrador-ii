import SideBarDoctor from "../../../components/SideBar/SideBarDoctor";
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
      <SideBarDoctor />
      <div className="content-container">
          <h1>Seus acompanhamentos</h1>
        <div className="acompanhamentos" style={{ maxHeight: "35vh" }}>
          <FollowPatient />
        </div>
          <h1>Conecte-se com outros pacientes</h1>
        <div className="conexoes" style={{ maxHeight: "35vh" }}>
          <ComplexGrid />
        </div>
      </div>
    </div>
  );
};

export default PatientDash;
