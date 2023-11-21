import { useState } from "react";
import SubmitButton from "../../../components/SubmitButton";
import { useNavigate } from "react-router-dom";
import useUserData from "../../../hooks/useSettingsDoctor";
import FormField from "../../../components/FormField";
import BottomBarDoctor from "../../../components/BottomBarDoctor";

const Settings = () => {
  const { dadosDoUsuario, handleChange, handleSubmit } = useUserData();

  const navegate = useNavigate();
  const goHome = () => navegate("/Login/Profissional");

  const [editMode, setEditMode] = useState(false);
  const [notificationsExpanded, setNotificationsExpanded] = useState(false);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleNotificationsClick = () => {
    setNotificationsExpanded(!notificationsExpanded);
  };

  return (
    <div>
      <div
        onClick={handleEditClick}
        style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
      >
        <span>Perfil</span>
        <span style={{ marginLeft: "5px", fontSize: "20px" }}>
          {editMode ? "🔽" : "▶️"}
        </span>
      </div>

      {editMode && (
        <div>
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
            type="select"
            name="sexo"
            value={dadosDoUsuario.sexo}
            onChange={(e) => handleChange(e, "sexo")}
          >
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
            <option value="other">Outro</option>
          </FormField>
          <FormField
            label="Nascimento"
            type="text"
            name="nascimento"
            value={dadosDoUsuario.nascimento}
            onChange={(e) => handleChange(e, "nascimento")}
          />
          <SubmitButton onClick={handleSubmit} label={"Salvar Alterações"} />
        </div>
      )}

      <h3
        onClick={handleNotificationsClick}
        style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
      >
        Notificações
        <span style={{ marginLeft: "5px", fontSize: "20px" }}>
          {notificationsExpanded ? "🔽" : "▶️"}
        </span>
      </h3>
      {notificationsExpanded && (
        <div>
          <p>Configurações de Notificações</p>
        </div>
      )}

      <SubmitButton onClick={goHome} label={"Logout"} />
      <BottomBarDoctor />
    </div>
  );
};

export default Settings;
