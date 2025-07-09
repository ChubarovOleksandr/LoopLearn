import { useDispatch } from 'react-redux';

import { QuestionInterface } from '@pages/dashboard/interfaces';

import { changeFlipped, removePassedQuestion } from 'src/redux/slice/quizSlice';

interface Props {
  text: string;
  question: QuestionInterface;
  withPause: boolean;
}

const QuestionPassed = ({ text, question, withPause }: Props) => {
  const dispatch = useDispatch();

  const questionPassed = () => {
    if (withPause) {
      dispatch(changeFlipped());
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
