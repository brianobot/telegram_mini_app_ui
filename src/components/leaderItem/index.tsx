import "./index.scss";
import crown from "../../assets/png/Group 2.png";

const LeaderItem = ({
  user,
  count,
}: {
  user: { id: string; buz_tokens: number };
  count: number;
}) => {
  return (
    <div className="leader_item">
      <div className={`leaderboard_image ${count === 1 ? "crown" : ""}`}>
        {count === 1 && <img src={crown} alt="top leaderboard icon" />}
        <img src="" alt="" />
        <span className="leader_count">{count}</span>
      </div>
      <div className="leaderboard_user">
        <b>
          <p>{user?.id}</p>
        </b>
        <p>{user?.buz_tokens}</p>
      </div>
    </div>
  );
};

export default LeaderItem;

export const OtherLeaderItem = ({
  user,
  count,
}: {
  user: { id: string; buz_tokens: number };
  count: number;
}) => {
  return (
    <div className="other_leader">
      <span>{count}</span>
      <div className="user_score">
        <div className="user_img">
          <img src="" alt="" />
        </div>
        <span>{user?.id}</span>
        <span>{user?.buz_tokens}</span>
      </div>
    </div>
  );
};
