import "./index.scss";
import crown from "../../assets/png/Group 2.png";

const LeaderItem = ({
  user,
  count,
}: {
  user: { buz_tokens: number; fullname: string; profile_image: string };
  count: number;
}) => {
  return (
    <div className={`leader_item ${count === 1 ? "one" : ""}`}>
      <div className={`leaderboard_image ${count === 1 ? "crown" : ""}`}>
        {count === 1 && (
          <img src={crown} alt="top leaderboard icon" className="crown_img" />
        )}
        <img src={user?.profile_image} alt="" className="img" />
        <span className="leader_count">{count}</span>
      </div>
      <div className="leaderboard_user">
        <b>
          <p>{user?.fullname}</p>
        </b>
        <p>{user?.buz_tokens}</p>
      </div>
    </div>
  );
};

export default LeaderItem;

export const OtherLeaderItem = ({
  user,
}: {
  user: {
    id: string;
    buz_tokens: number;
    fullname: string;
    profile_image: string;
    position: number;
  };
}) => {
  return (
    <div className="other_leader">
      <span>{user?.position}</span>
      <div className="user_score">
        <div className="user_img">
          <img src={user?.profile_image} alt="" />
        </div>
        <span>
          {user?.fullname.substring(0, 20) +
            (user?.fullname?.length > 20 ? "..." : "")}
        </span>
        <span>{user?.buz_tokens}</span>
      </div>
    </div>
  );
};
