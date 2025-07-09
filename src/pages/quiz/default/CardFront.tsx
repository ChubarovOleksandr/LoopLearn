import { QuestionInterface } from '@pages/dashboard/interfaces';
import CheckAnswer from '@pages/quiz/default/CheckAnswer';
import FlipButton from '@pages/quiz/default/FlipButton';
import QuestionPassed from '@pages/quiz/default/QuestionPassed';

interface Props {
  question: QuestionInterface;
}

const CardFront = ({ question }: Props) => {
  return (
    <div className="card-front">
      <div className="question">{question.questionText}</div>
      <div className="buttons">
        <QuestionPassed question={question} text={'Знаю'} withPause={false} />
        <FlipButton text={'Не знаю'} />
        <CheckAnswer />
      </div>
    </div>
  );
};

export default CardFront;
