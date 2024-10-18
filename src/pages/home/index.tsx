import { useState } from "react";
import "./index.scss";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import checkIcon from "../../assets/png/material-symbols_check-small-rounded.png";

const Home = () => {
  const options = ["2018", "2019", "2018"];

  const [selected, setselected] = useState<number>();

  return (
    <div className="home">
      <p className="question_count">
        <span>2</span> / <span>7</span>
      </p>
      <div className="big_count">
        <div className="big_count_brown"></div>
        <span>700</span>
      </div>
      <div className="question_area">
        <div className="question_box">
          <div className="progress">
            <CircularProgressbar
              value={2}
              styles={buildStyles({
                pathColor: `#1c0e00`,
                textColor: "#1c0e00",
                trailColor: "#faa661",
                backgroundColor: "white",
                textSize: 40,
              })}
              maxValue={7}
              text={`${2}`}
            />
          </div>
          <p>In what year did Rema release his debut single 'Dumebi'</p>
        </div>
      </div>
      <div className="options">
        {options?.map((opt, idx) => {
          return (
            <div
              className={`option ${selected === idx ? "selected" : ""}`}
              key={idx}
              onClick={() => setselected(idx)}
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
      <button className="next_btn">
        <span>Next</span>
      </button>
    </div>
  );
};
export default Home;
