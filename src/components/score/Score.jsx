import { useSelector } from "react-redux";

import useGameLogic from "../../hooks/useGameLogic";

import "./style.scss";

const Score = () => {
  const { amountCards, pace } = useSelector((state) => state.settings);
  const { seconds, minutes } = useSelector((state) => state.timer);
  const { amountClicks } = useSelector((state) => state.gameProcess);
  const { calculateScores } = useGameLogic();

  return (
    <div className="score">
      <h2>
        Your score:{" "}
        <span>
          {calculateScores(seconds, minutes, amountCards, amountClicks, pace)}{" "}
          points
        </span>
      </h2>
    </div>
  );
};

export default Score;
