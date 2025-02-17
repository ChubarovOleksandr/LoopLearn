import { useDispatch } from "react-redux";
import { IQuestion } from "../../dashboard/Dashboard";
import { addFailedQuestion, changeFlipped, changeIsChecking, leftQuestion } from "../../../redux/slice/quizSlice";

interface IProps {
  text: string;
  question: IQuestion;
}

const QuestionFailed = ({ text, question }: IProps) => {
  const dispatch = useDispatch();

  const questionFailed = () => {
    dispatch(changeFlipped());
    setTimeout(() => {
      dispatch(changeIsChecking(false));
      dispatch(leftQuestion());
      dispatch(addFailedQuestion(question));
      }, 200);
  };

  return (
    <button className="reject" onClick={questionFailed}>
      {text}
    </button>
  );
};

export default QuestionFailed;
