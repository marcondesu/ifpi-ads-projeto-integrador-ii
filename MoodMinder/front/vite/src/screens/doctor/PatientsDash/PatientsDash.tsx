import BottomBar from "../../../components/BottomBar/BottomBarDoctor";
import ComplexGrid from "../../../components/PatientDash/PatientsList";

const PatientDash = () => {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <h1>Pacientes Cadastrados</h1>
      </div>
      <BottomBar />
      <ComplexGrid />
    </div>
  );
};

export default PatientDash;
