import CheckAnswer from './CheckAnswer';
import FlipButton from './FlipButton';
import QuestionPassed from './QuestionPassed';
import { QuestionInterface } from '../../dashboard/interfaces';

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
