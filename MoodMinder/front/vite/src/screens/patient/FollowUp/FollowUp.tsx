// FollowUp.js
import BottomBar from '../../../components/SideBar/SideBarPatient';
import ComplexGrid from '../../../components/ProfissionalDash/ProfList';
import FollowProf from '../../../components/ProfissionalDash/FollowProf';
import './FollowUp.css';

const FollowUp = () => {
  return (
      <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
        <BottomBar />
        <div className="content-container">
          <h1>Acompanhamentos existentes</h1>
          <FollowProf />
          <h1>Conecte-se com profissionais</h1>
          <ComplexGrid />
        </div>
      </div>
  );
};

export default FollowUp;
