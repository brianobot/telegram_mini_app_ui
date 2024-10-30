import "./index.scss";

import useRequests from "../../hooks/req";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { BallTriangle } from "react-loader-spinner";

const Profile = () => {
  const { handleGetUser, userData } = useRequests();
  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <div className="profile">
      {userData?.loading || !userData?.data ? (
        <div className="loader_container">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="var(--dark_brown)"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="profile_top">
          <div className="img_holder">
            <img src={userData?.data?.profile_image} alt="" />
          </div>

          <p className="name">{userData?.data?.fullname}</p>
          <div className="referral_area">
            <div className="referra_link">
              <span>{userData?.data?.referral_link}</span>
            </div>
            <button
              onClick={() =>
                window.navigator.clipboard
                  .writeText(userData?.data?.referral_link)
                  ?.then(() => toast.success("Copied !"))
              }
            >
              Copy link
            </button>
          </div>
          <div className="referral_count">
            <h3>REFERRALS</h3>
            <p>{userData?.data?.referrals}</p>
            <h2>Buz earned</h2>
          </div>
          <div className="scores">
            <div className="score_top">
              <h4>GAME</h4>
              <p>{userData?.data?.buz_token_distro?.games}</p>
            </div>
            <div className="score_bottom">
              <div className="score">
                <h4>REFERRALS</h4>
                <p>{userData?.data?.buz_token_distro?.referrals}</p>
              </div>
              <div className="score">
                <h4>EVENTS</h4>
                <p>{userData?.data?.buz_token_distro?.events}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;
