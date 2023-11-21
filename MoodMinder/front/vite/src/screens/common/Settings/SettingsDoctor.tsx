import SubmitButton from "../../../components/SubmitButton";
import { useNavigate } from "react-router-dom";
import useUserData from "../../../hooks/useSettingsDoctor";
import FormField from "../../../components/FormField";
import BottomBarDoctor from "../../../components/BottomBarDoctor";

const Settings = () => {
  const { dadosDoUsuario, handleChange, handleSubmit, handleRemover } = useUserData();

  const navegate = useNavigate();
  const goHome = () => navegate("/Login/Profissional");

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>Perfil</span>
      </div>

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
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center", paddingTop: '2rem'}}>
          <span>Ações</span>
        </div>
        <div style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
          <SubmitButton onClick={handleSubmit} label={"Salvar Alterações"} />
          <SubmitButton style={{background: '#bf2a23'}} onClick={handleRemover} label={"Deletar conta"} />
          <SubmitButton onClick={goHome} label={"Logout"} />
        </div>

      </div>

      <BottomBarDoctor />
    </div>
  );
};

export default Settings;
