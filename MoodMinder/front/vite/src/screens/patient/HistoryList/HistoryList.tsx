import BottomBar from "../../../components/BottomBarPatient";
import ComplexGrid from "../../../components/EmotionList";

const HistoryList = () => {
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
        <h1>Situações que você já viveu</h1>
      </div>
      <BottomBar />
      <ComplexGrid />
    </div>
  );
};

export default HistoryList;
