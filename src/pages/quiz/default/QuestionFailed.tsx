import { useDispatch } from "react-redux";
import { addFailedQuestion, changeFlipped, changeIsChecking, leftQuestion } from "../../../redux/slice/quizSlice";
import { QuestionInterface } from '../../dashboard/interfaces';

interface Props {
  text: string;
  question: QuestionInterface;
}

const QuestionFailed = ({ text, question }: Props) => {
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
