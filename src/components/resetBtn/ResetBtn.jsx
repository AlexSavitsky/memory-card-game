import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";

import { setGameProcess, amountClickReset } from "../../redux/slice/gameProcessSlice";

import './style.scss';

const ResetBtn = () => {
  const dispatch = useDispatch();

const handleClick = () => {
  dispatch(setGameProcess(false));
  dispatch(amountClickReset());
}

  return (
    <Link to={"/"}>
      <button className="reset-btn" onClick={handleClick}>Reset</button>
    </Link>
  );
};

export default ResetBtn;
