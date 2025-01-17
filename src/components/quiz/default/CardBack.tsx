import { IQuestion } from "../../dashboard/Dashboard";
import QuestionFailed from "./QuestionFailed";
import QuestionPassed from "./QuestionPassed";

interface IProps {
  question: IQuestion;
  isChecking: boolean;
}

const CardBack = ({ question, isChecking }: IProps) => {
  
  const renderButtons = () => {
    if (!question.answer) {
      return <QuestionFailed question={question} text={"Следующий вопрос"} />;
    }

    if (isChecking) {
      return (
        <>
          <QuestionPassed question={question} text={"Знал"} withPause={true} />
          <QuestionFailed question={question} text={"Не знал"} />
        </>
      );
    }

    return <QuestionFailed question={question} text={"Следующий вопрос"} />;
  };

  return (
    <div className="card-back">
      <div className="question">{question.answer || "Вы не указали ответ на этот вопрос"}</div>
      <div className="buttons">{renderButtons()}</div>
    </div>
  );
};

export default CardBack;