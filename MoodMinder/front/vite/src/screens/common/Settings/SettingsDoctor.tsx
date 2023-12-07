import SubmitButton from "../../../components/SubmitButton";
// import { useNavigate } from "react-router-dom";
import useUserData from "../../../hooks/useSettingsDoctor";
import FormField from "../../../components/FormField/FormField";
import SideBarDoctor from "../../../components/SideBar/SideBarDoctor";

const Settings = () => {
  const { dadosDoUsuario, handleChange, handleSubmit, handleRemover } =
    useUserData();

  // const navegate = useNavigate();
  // const goHome = () => {
  //   navegate("/login/profissional");
  //   localStorage.removeItem("token");
  // };
  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
      <SideBarDoctor />
      <div className="content-container">
      <h1>Edite suas informações</h1>

      <div className="config-container" style={{justifyContent: 'center'}}>

        <div
          style={{ display: "flex", alignItems: "center", paddingTop: "2rem" }}
        >
          <span>Perfil</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FormField
            label={"Nome"}
            type={"text"}
            name={"nome"}
            value={dadosDoUsuario.nome}
            onChange={(e) => handleChange(e, "nome")}
          />
          <FormField
            label="E-mail"
            type="email"
            name="email"
            value={dadosDoUsuario.email}
            onChange={(e) => handleChange(e, "email")}
          />
          <FormField
            label="Gênero"
            type="text"
            name="sexo"
            value={dadosDoUsuario.sexo}
            onChange={(e) => handleChange(e, "sexo")}
          />
          <FormField
            label="Nascimento"
            type="text"
            name="nascimento"
            value={dadosDoUsuario.nascimento}
            onChange={(e) => handleChange(e, "nascimento")}
          />
        </div>

        {/* <div
          style={{ display: "flex", alignItems: "center", paddingTop: "2rem" }}
        >
          <span>Ações</span>
        </div> */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <SubmitButton onClick={handleSubmit} label={"Salvar"} />
          <SubmitButton
            style={{ borderColor: "#bf2a23"}}
            onClick={handleRemover}
            label={"Deletar conta"}
          />
          {/* <SubmitButton onClick={goHome} label={"Logout"} /> */}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
