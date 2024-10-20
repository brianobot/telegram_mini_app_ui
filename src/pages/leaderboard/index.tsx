import LeaderItem, { OtherLeaderItem } from "../../components/leaderItem";
import { leaderboardData } from "../../utils/datas";
import "./index.scss";

const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <div className="top_three">
        <h3>#23456</h3>
        <div className="top_container">
          <LeaderItem user={leaderboardData[0]} count={2} />
          <LeaderItem user={leaderboardData[1]} count={1} />
          <LeaderItem user={leaderboardData[2]} count={3} />
        </div>
        <div className="bottom_leaderboard">
          {leaderboardData?.map((dataItem, idx) => {
            if (idx > 2) return <OtherLeaderItem user={dataItem} count={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
