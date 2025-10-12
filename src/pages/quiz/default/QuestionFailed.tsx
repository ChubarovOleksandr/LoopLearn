import { useDispatch } from 'react-redux';

import { QuestionInterface } from '@pages/dashboard/interfaces';

import {
  addFailedQuestion,
  changeFlipped,
  changeIsChecking,
  leftQuestion,
} from 'src/redux/slice/quizSlice';

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
