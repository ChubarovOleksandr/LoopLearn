import { useSelector } from "react-redux";
import QuestionItem from "./QuestionItem";

const QuestionList = ({ }) => {

   const questions = useSelector(state => state.section.newSection.questions);

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