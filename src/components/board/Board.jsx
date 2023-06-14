import { useSelector, useDispatch } from "react-redux";
import { useCallback, useRef} from "react";

import { setGameProcess, amountClickInc, amountClickReset} from "../../redux/slice/gameProcessSlice";

import useGetImages from "../../hooks/useGetImages";
import useGameLogic from "../../hooks/useGameLogic";

import Card from "../card/Card";

import "./style.scss";

const Board = ({ winFunc }) => {
  const dispatch = useDispatch();
  const { amountCards } = useSelector((state) => state.settings);
  
  const images = useGetImages(amountCards);

  const selectedCards = [];

  let prevCard = useRef(null);

  const onSelectClick = useCallback(
    (setIsFlipped, target) => {
      dispatch(amountClickInc());
      if (
        selectedCards.length === 0 ||
        selectedCards.length % 2 === 0 ||
        selectedCards[selectedCards.length - 1].id === target.id
      ) {
        prevCard.current = setIsFlipped;
        selectedCards.push(target);
        setIsFlipped(true);
        checkWin();
      } else {
        setIsFlipped(true);
        setTimeout(() => {
          selectedCards.pop();
          prevCard.current(false);
          setIsFlipped(false);
        }, 500);
      }
    },
    [selectedCards, amountCards, winFunc]
  );

  const checkWin = () => {
    if (selectedCards.length / 2 === amountCards) {
      dispatch(setGameProcess(false)); 
      winFunc(true);
    }
  };

  const renderCards = () => {
    return images.map((image, index) => {
      return (
        <Card
          key={index}
          id={image[0]}
          imageUrl={image[1]}
          selectedFunction={onSelectClick}
        />
      );
    });
  };

  return <div className="board-container">{renderCards()}</div>;
};

export default Board;