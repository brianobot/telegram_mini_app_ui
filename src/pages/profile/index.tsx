import "./index.scss";
import bee from "../../assets/png/Pbs-Nature-Bee-GIF-by-Nature-o-unscreen 1.png";
const Profile = () => {
  return (
    <div className="profile">
      <div className="profile_top">
        <img src={bee} alt="" />
        <p className="name">Smith Carol</p>
        <div className="referral_area">
          <div className="referra_link">
            <span>www.buzzmode.com/chandice1970</span>
          </div>
          <button>Copy link</button>
        </div>
        <div className="referral_count">
          <h3>REFERRALS</h3>
          <p>5</p>
          <h2>Buz earned</h2>
        </div>
        <div className="scores">
          <div className="score_top">
            <h4>GAME</h4>
            <p>98000</p>
          </div>
          <div className="score_bottom">
            <div className="score">
              <h4>REFERRALS</h4>
              <p>21000</p>
            </div>
            <div className="score">
              <h4>EVENTS</h4>
              <p>128000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="profile_bottom"></div>
    </div>
  );
};
export default Profile;
