import { useDispatch } from "react-redux";
import { changeFlipped, changeIsChecking } from "../../../redux/slice/quizSlice";

interface IProps {
  text: string
}

const FlipButton = ({ text }: IProps) => {
  const dispatch = useDispatch();

  const questionFailed = () => {
    dispatch(changeFlipped());
    dispatch(changeIsChecking(false));
  };

  return (
    <button className="reject" onClick={questionFailed}>
      {text}
    </button>
  );
};

export default FlipButton;
