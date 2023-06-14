import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { setSeconds, setMinutes } from "../../redux/slice/timerSlice";

import "./style.scss";

const Timer = () => {
  const dispatch = useDispatch();
  const { gameProcess } = useSelector((state) => state.gameProcess);
  const { seconds, minutes } = useSelector((state) => state.timer);

  useEffect(() => {
    let interval = null;

    if (gameProcess) {
      interval = setInterval(() => {
        if (seconds >= 59) {
          dispatch(setSeconds(0));
          dispatch(setMinutes(minutes + 1));
        } else {
          dispatch(setSeconds(seconds + 1));
        }
      }, 1000);
    } else if (!gameProcess) {
      dispatch(setSeconds(0));
      dispatch(setMinutes(0));
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [gameProcess, seconds]);

  const addZero = (number) => {
    if (number >= 10) {
      return number;
    } else {
      return "0" + number;
    }
  };

  return (
    <div className="timer">
      <h2>
        Passed time:
        <span>
          {` ${addZero(minutes)}:
        ${addZero(seconds)}`}
        </span>
      </h2>
    </div>
  );
};

export default Timer;
