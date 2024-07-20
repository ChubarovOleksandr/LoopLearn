import { useSelector } from "react-redux";
import QuestionItem from "./QuestionItem";
import { IQuestion } from "../dashboard/Dashboard";
import { RootState } from "../../redux";
import { useAppSelector } from "../../utils/hooks";

const QuestionList = () => {

   const questions: IQuestion[] = useAppSelector(state => state.section.newSection.questions);

   return (
      <>
         {questions.length > 0 ? (
            <>
               <span>Отредактируйте или добавьте ответ</span>
               <ul>
                  {questions.map((question, index) => (
                     <QuestionItem key={question.id} item={question} index={index} />
                  ))}
               </ul>
            </>
         ) : null}
      </>
   );
}

export default QuestionList;