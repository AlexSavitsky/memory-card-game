import Score from "../score/Score";
import ResetBtn from "../resetBtn/ResetBtn";

import "./style.scss";

const WinMassage = () => {
  return (
    <div className="win-massage-container">
      <h2 className="win-massage">Congratulations, U WIN!</h2>
      <Score />
      <ResetBtn />
    </div>
  );
};

export default WinMassage;
