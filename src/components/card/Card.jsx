import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import cardImg from "../../assets/img/card.png";

import "./style.scss";

const Card = ({ id, imageUrl, selectedFunction }) => {
  const { gameProcess } = useSelector((state) => state.gameProcess);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (!gameProcess) {
      setIsFlipped(true);
    } else {
      setIsFlipped(false);
    }
  }, [gameProcess]);

  const handleCardClick = (e) => {
    selectedFunction(setIsFlipped, e.currentTarget);
  };

  return (
    <div
      className={`card${isFlipped ? " flip" : ""}`}
      onClick={(e) => handleCardClick(e)}
      aria-disabled={isFlipped}
      id={id}
    >
      <div className="card-front">
        <img src={cardImg} alt="doge" />
      </div>
      <div className="card-back">
        <img src={imageUrl} alt="image" />
      </div>
    </div>
  );
};

export default Card;
