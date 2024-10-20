import "./index.scss";
import crown from "../../assets/png/Group 2.png";

const LeaderItem = ({
  user,
  count,
}: {
  user: { name: string; score: number };
  count: number;
}) => {
  return (
    <div className="leader_item">
      <div className="leaderboard_image">
        {count === 1 && <img src={crown} alt="top leaderboard icon" />}
        <img src="" alt="" />
        <span className="leader_count">{count}</span>
      </div>
      <div className="leaderboard_user">
        <b>
          <p>{user?.name}</p>
        </b>
        <p>{user?.score}</p>
      </div>
    </div>
  );
};

export default LeaderItem;

export const OtherLeaderItem = ({
  user,
  count,
}: {
  user: { name: string; score: number };
  count: number;
}) => {
  return (
    <div className="other_leader">
      <span>{count}</span>
      <div className="user_score">
        <div className="user_img">
          <img src="" alt="" />
        </div>
        <span>{user?.name}</span>
        <span>{user?.score}</span>
      </div>
    </div>
  );
};
