import BottomBar from "../../components/BottomBar";
import InputWithIcon from "../../components/Input";
import { HiOutlineSearch } from "react-icons/hi";

const FollowUp = () => {
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
        <h1>Conecte-se com profissionais</h1>
        <div className="inputs">
          <InputWithIcon
            icon={<HiOutlineSearch />}
            type="search"
            placeholder={"Nome do Profissional"}
          />
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default FollowUp;
