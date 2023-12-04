import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div
      className="cardContent"
      style={{
        position: "relative",
        padding: "1rem",
        backgroundColor: "#ede9fe",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <h3>Suporte</h3>
      <p>
        Tendo problemas com o MoodMinder, entre em contato para mais informações
      </p>
      <Link to={"mailto:teamdevsn@gmail.com"}>
        <button
          style={{
            padding: ".5rem",
            border: "1px solid #333",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Central
        </button>
      </Link>
    </div>
  );
};

export default Help;
