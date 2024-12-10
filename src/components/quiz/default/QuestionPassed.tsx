import { useDispatch } from "react-redux";
import { changeFlipped, removePassedQuestion } from "../../../redux/slice/quizSlice";
import { IQuestion } from "../../dashboard/Dashboard";

interface IProps {
  text: string;
  question: IQuestion;
  withPause: boolean
}

const QuestionPassed = ({ text, question, withPause }: IProps) => {
  const dispatch = useDispatch();

  const questionPassed = () => {
    if(withPause){
      dispatch(changeFlipped())
      setTimeout(() => {
        dispatch(removePassedQuestion({ id: question.id }));
      }, 200);
    } else {
      dispatch(removePassedQuestion({ id: question.id }));
    }
  };

  return (
    <button className="confirm" onClick={questionPassed}>
      {text}
    </button>
  );
};

export default QuestionPassed;
