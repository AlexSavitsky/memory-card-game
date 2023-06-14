const useGameLogic = () => {
  const calculatePace = (level) => {
    switch (level) {
      case "easy":
        return 5000;
      case "medium":
        return 3000;
      case "hard":
        return 1000;
      case "pro":
        return 0;
    }
  };

  const calculateScores = (seconds, minutes, amountCards, clicks, pace) => {
    let passedTime = 0;
    let multiplier = 1;

    switch (pace) {
      case "medium":
        multiplier = 2;
        break;
      case "hard":
        multiplier = 3;
        break;
      case "pro":
        multiplier = 8;
        break;
      default:
        multiplier = 1;
        break;
    }

    if (minutes === 0) {
      passedTime = seconds;
    } else {
      passedTime = minutes * 60 + seconds;
    }

    return Math.round(
      ((amountCards * 2) / clicks) * (1 + (1 / passedTime) * 1000) * multiplier
    );
  };

  return { calculatePace, calculateScores };
};

export default useGameLogic;
