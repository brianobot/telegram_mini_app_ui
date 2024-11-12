import "./index.scss";
import welcomeLogo from "../../assets/png/bebe.jpeg";
import { useNavigate } from "react-router-dom";
import useRequests from "../../hooks/req";
import { useEffect } from "react";

const Welcome = () => {
  const navigate = useNavigate();

  const { handleGetUser, userData } = useRequests();

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <div className="welcome">
      <div className="welcome_center">
        <img src={welcomeLogo} alt="" />
        <h1>HELLO</h1>
        <p>{userData?.data?.fullname}</p>
      </div>
      <button className="start_button" onClick={() => navigate("/app/home")}>
        <span>Start game</span>
      </button>
    </div>
  );
};

export default Welcome;
