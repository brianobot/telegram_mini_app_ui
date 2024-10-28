import { useEffect } from "react";
import LeaderItem, { OtherLeaderItem } from "../../components/leaderItem";
import "./index.scss";
import useRequests from "../../hooks/req";
import { BallTriangle } from "react-loader-spinner";

const Leaderboard = () => {
  const { handleGetLeaderboard, leaderboard } = useRequests();

  const { handleGetUser, userData } = useRequests();

  useEffect(() => {
    handleGetLeaderboard();
    handleGetUser();
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
          <h3>#{userData?.data?.position}</h3>
          <div className="top_container">
            {leaderboard?.data?.[1] && (
              <LeaderItem user={leaderboard?.data?.[1]} count={2} />
            )}
            {leaderboard?.data?.[0] && (
              <LeaderItem user={leaderboard?.data?.[0]} count={1} />
            )}
            {leaderboard?.data?.[2] && (
              <LeaderItem user={leaderboard?.data?.[2]} count={3} />
            )}
          </div>
          <div className="bottom_leaderboard">
            {leaderboard?.data?.map(
              (
                dataItem: {
                  id: string;
                  buz_tokens: number;
                  fullname: string;
                  profile_image: string;
                },
                idx: number
              ) => {
                if (idx > 2 && idx < 7)
                  return <OtherLeaderItem user={dataItem} count={idx + 1} />;
              }
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
