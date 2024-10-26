import QuestionItem from './QuestionItem'
import { IQuestion } from "../dashboard/Dashboard";
import { useAppSelector } from "../../utils/hooks";

const QuestionList = () => {

   const questions: IQuestion[] = useAppSelector(state => state.section.newSection.questions);
   const isAnswerShow = useAppSelector((state) => state.section.newSection.showAnswerByDefault); 

   return (
     <>
       {questions.length > 0 ? (
         <>
           <span>Отредактируйте или добавьте ответ</span>
           <ul>
             {questions.map((question) => (
               <QuestionItem key={question.id} item={question} isAnswerShow={isAnswerShow} />
             ))}
           </ul>
         </>
       ) : null}
     </>
   );
}

export default QuestionList;