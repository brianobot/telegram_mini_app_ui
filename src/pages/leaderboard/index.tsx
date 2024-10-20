import { useEffect } from "react";
import LeaderItem, { OtherLeaderItem } from "../../components/leaderItem";
import "./index.scss";
import useRequests from "../../hooks/req";
import { BallTriangle } from "react-loader-spinner";

const Leaderboard = () => {
  const { handleGetLeaderboard, leaderboard } = useRequests();
  useEffect(() => {
    handleGetLeaderboard();
  }, []);
  return (
    <div className="leaderboard">
      {leaderboard?.loading || !leaderboard?.data ? (
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
        <div className="top_three">
          <h3>#23456</h3>
          <div className="top_container">
            <LeaderItem user={leaderboard?.data?.[0]} count={2} />
            <LeaderItem user={leaderboard?.data?.[1]} count={1} />
            <LeaderItem user={leaderboard?.data?.[2]} count={3} />
          </div>
          <div className="bottom_leaderboard">
            {leaderboard?.data?.map(
              (dataItem: { id: string; buz_tokens: number }, idx: number) => {
                if (idx > 2)
                  return <OtherLeaderItem user={dataItem} count={idx} />;
              }
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
