import BottomBar from "../../../components/SideBar/SideBarPatient";
import ComplexGrid from "../../../components/EmotionDash/EmotionList";

const HistoryList = () => {
  return (
    <div style={{ display: "flex" }}>
      <BottomBar />
      <div className="content-container">
        <h1>Situações que você já viveu</h1>
        <ComplexGrid />
      </div>
    </div>
  );
};

export default HistoryList;
