import { useEffect, useState } from "react";
import "./index.scss";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import checkIcon from "../../assets/png/material-symbols_check-small-rounded.png";
import useRequests from "../../hooks/req";
import { BallTriangle } from "react-loader-spinner";
import { toast } from "react-toastify";

const Home = () => {
  const [selected, setselected] = useState<number>();
  const [selectedAnswer, setselectedAnswer] = useState<string>();

  // hook to get questions
  const { handleGetQuestion, questionData, handleMarkQuestion, question } =
    useRequests();

  // fetch question on page load
  useEffect(() => {
    handleGetQuestion({});
    return;
  }, []);

  const handleAnswer = (answer?: string) => {
    if (answer) {
      if (answer === questionData?.data?.answer) {
        handleMarkQuestion({ id: questionData?.data?.id })
          .then(() => {
            toast.success(<p>🎉 Correct! </p>);
            setselected(undefined);
            setselectedAnswer(undefined);
            handleGetQuestion({});
          })
          .catch((err) => {
            toast.error(err?.response?.data?.detail);
          });
      } else {
        toast.error(<p>Wrong!</p>);
        setselected(undefined);
        setselectedAnswer(undefined);
        handleGetQuestion({});
      }
    }
  };

  return (
    <div className="home">
      {questionData?.loading ? (
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
      ) : questionData?.error?.response ? (
        <p className="error_div">
          <span>{questionData?.error?.response?.data?.detail}</span>
        </p>
      ) : (
        <>
          <p className="question_count">
            <span>{questionData?.data?.daily_question_count}</span> /{" "}
            <span>7</span>
          </p>
          <div className="big_count">
            <div className="big_count_brown"></div>
            <span>{questionData?.data?.daily_question_reward}</span>
          </div>
          <div className="question_area">
            <div className="question_box">
              <div className="progress">
                <CircularProgressbar
                  value={questionData?.data?.daily_question_count}
                  styles={buildStyles({
                    pathColor: `#1c0e00`,
                    textColor: "#1c0e00",
                    trailColor: "#faa661",
                    backgroundColor: "white",
                    textSize: 40,
                  })}
                  maxValue={7}
                  text={`${questionData?.data?.daily_question_count}`}
                />
              </div>
              <p>{questionData?.data?.question}</p>
            </div>
          </div>
          <div className="options">
            {questionData?.data?.options?.map((opt: string, idx: number) => {
              return (
                <div
                  className={`option ${selected === idx ? "selected" : ""}`}
                  key={idx}
                  onClick={() => {
                    setselected(idx);
                    setselectedAnswer(opt);
                  }}
                >
                  <span>{opt}</span>
                  {selected === idx ? (
                    <img src={checkIcon} alt="" />
                  ) : (
                    <div className="radio"></div>
                  )}
                </div>
              );
            })}
          </div>
          <button
            className="next_btn"
            onClick={() => {
              handleAnswer(selectedAnswer);
            }}
            disabled={selectedAnswer ? false : true}
          >
            {question?.loading ? (
              <BallTriangle
                height={30}
                width={30}
                radius={5}
                color="var(--brown)"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : (
              <span>Next</span>
            )}
          </button>
        </>
      )}
    </div>
  );
};
export default Home;
