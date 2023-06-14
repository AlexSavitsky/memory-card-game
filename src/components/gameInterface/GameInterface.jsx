import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGameProcess } from "../../redux/slice/gameProcessSlice";
import useGameLogic from "../../hooks/useGameLogic";

import WinMassage from "../winMassage/WinMassage";
import Timer from "../timer/Timer";
import Board from "../board/Board";
import ResetBtn from "../resetBtn/ResetBtn";

import "./style.scss";

const GameInterface = () => {
  const dispatch = useDispatch();
  const { pace } = useSelector((state) => state.settings);
  const { calculatePace } = useGameLogic();
  const [isWin, setIsWin] = useState(false);

  const handleSetTimeout = useCallback(() => {
    const timerId = setTimeout(() => {
      dispatch(setGameProcess(true));
    }, calculatePace(pace));
    return () => clearTimeout(timerId);
  }, [calculatePace, dispatch, pace]);

  useEffect(() => {
    const timerId = handleSetTimeout();
    return () => clearTimeout(timerId);
  }, [handleSetTimeout]);

  return (
    <div className="game-interface">
      {isWin ? (
        <WinMassage />
      ) : (
        <>
          <Timer />
          <Board winFunc={setIsWin} />
          <ResetBtn />
        </>
      )}
    </div>
  );
};

export default GameInterface;
