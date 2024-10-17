import "./index.scss";
import welcomeLogo from "../../assets/png/BUZMODE_LOGO-removebg-preview (2) 1 (1).png";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome">
      <div className="welcome_center">
        <img src={welcomeLogo} alt="" />
        <h1>HELLO</h1>
        <p>Smith Carol</p>
      </div>
      <button className="start_button" onClick={() => navigate("/app/home")}>
        <span>Start game</span>
      </button>
    </div>
  );
};

export default Welcome;
