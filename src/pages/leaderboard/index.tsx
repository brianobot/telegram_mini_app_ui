import { useEffect, useState } from "react";
import LeaderItem, { OtherLeaderItem } from "../../components/leaderItem";
import "./index.scss";
import useRequests from "../../hooks/req";
import { BallTriangle } from "react-loader-spinner";
import bg from "../../assets/png/Rectangle 1 2.png";

const Leaderboard = () => {
  const { handleGetLeaderboard, leaderboard } = useRequests();

  const { handleGetUser, userData } = useRequests();

  useEffect(() => {
    handleGetLeaderboard();
    handleGetUser();
  }, []);

  const [transforedLeaderData, setTransformLeaderboard] = useState<[]>();

  useEffect(() => {
    if (leaderboard?.data && userData?.data) {
      if (userData?.data?.position > 6) {
        const dataX = leaderboard?.data
          ?.map((leader: unknown, idx: number) => {
            if (idx < 6) {
              return leader;
            }
          })
          .filter((item: unknown) => item && item);

        dataX?.push(userData?.data);
        setTransformLeaderboard(dataX);
      } else {
        setTransformLeaderboard(
          leaderboard?.data?.map(
            (leader: unknown, idx: number) => idx > 2 && leader
          )
        );
      }
    }
  }, [leaderboard?.data, userData?.data]);

  return (
    <div className="leaderboard">
      <img src={bg} alt="backhround" className="bg" />
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
            {transforedLeaderData?.map(
              (
                dataItem: {
                  id: string;
                  buz_tokens: number;
                  fullname: string;
                  profile_image: string;
                },
                idx: number
              ) => {
                if (idx > 2)
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
