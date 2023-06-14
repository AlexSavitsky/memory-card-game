import {Link} from 'react-router-dom';
import { useDispatch, useSelector  } from "react-redux";
import {
  amountCardsInc,
  amountCardsDec,
  changePace,
} from "../../redux/slice/settingsSlice";
import "./style.scss";

const GameSettings = () => {
  const dispatch = useDispatch();
  const { amountCards, pace } = useSelector((state) => state.settings);

  const handleAmountInc = () => {
    dispatch(amountCardsInc());
  };

  const handleAmountDec = () => {
    dispatch(amountCardsDec());
  };

  const handlePaceClick = (e) => {
    dispatch(changePace(e.target.textContent.toLocaleLowerCase()));
  };

  const renderPaceButtons = () => {
    const paceLevels = ["Easy", "Medium", "Hard", "Pro"];

    return paceLevels.map((level) => {
      let classNames = "pace-level-button";
      if (level.toLocaleLowerCase() === pace) {
        classNames += " btn_active";
      }

      return (
        <li key={level}>
          <button className={classNames} onClick={(e) => handlePaceClick(e)}>
            {level}
          </button>
        </li>
      );
    });
  };

  return (
    <div className="game-settings">
      <h2>Settings: </h2>
      <div className="game-settings-container">
        <span className="setting-label">Amount of cards:</span>

        <div className="setting-container">
          <div className="amount-of-cards">
            <button onClick={handleAmountDec} disabled={amountCards <= 2}>
              -
            </button>
            <span>{amountCards}</span>
            <button onClick={handleAmountInc} disabled={amountCards >= 9}>
              +
            </button>
          </div>
        </div>

        <span className="neon setting-label">Pace:</span>
        <div className="setting-container">
          <ul className="pace-levels">{renderPaceButtons()}</ul>
        </div>

        <Link to="/game">
          <button className="start-button">Start</button>
        </Link>
      </div>
    </div>
  );
};

export default GameSettings;
