import { IQuestion } from "../../dashboard/Dashboard";
import QuestionFailed from "./QuestionFailed";
import QuestionPassed from "./QuestionPassed";

interface IProps {
  question: IQuestion;
  isChecking: boolean;
}

const CardBack = ({ question, isChecking }: IProps) => {
  return (
    <div className="card-back">
      <div className="question">{question.answer}</div>
      <div className="buttons">
        {isChecking ?
        <>
        <QuestionPassed question={question} text={"Знал"} withPause={true}/>
        <QuestionFailed question={question} text={"Не знал"} />
        </>
        :
        <QuestionFailed question={question} text={"Следующий вопрос"}/>
        }
      </div>
    </div>
  );
};
 
export default CardBack;