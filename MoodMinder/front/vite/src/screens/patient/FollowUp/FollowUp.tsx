// FollowUp.js
import BottomBar from '../../../components/SideBar/SideBarPatient';
import ComplexGrid from '../../../components/ProfissionalDash/ProfList';
import './FollowUp.css';

const FollowUp = () => {
  return (
    <div style={{ display: 'flex', width:'100vw', height:'100vh' }}>
      <BottomBar />
      <div className="content-container">
        <h1>Conecte-se com profissionais</h1>
        <ComplexGrid />
      </div>
    </div>
  );
};

export default FollowUp;
