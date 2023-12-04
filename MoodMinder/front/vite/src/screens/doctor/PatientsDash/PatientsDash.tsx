import BottomBar from "../../../components/SideBar/SideBarDoctor";
import ComplexGrid from "../../../components/PatientDash/PatientsList";

const PatientDash = () => {
  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
      <BottomBar />
      <div className="content-container">
        <h1>Pacientes Cadastrados</h1>
      <ComplexGrid />
      </div>
    </div>
  );
};

export default PatientDash;
