import autosize from "autosize";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { changeQuestion } from "../../redux/slice/sectionsSlice";

const QuestionItem = ({ item, index }) => {

   const dispatch = useDispatch();

   const questionRef = useRef();

   const onChangeQuestion = (value) => {
      dispatch(changeQuestion({ id: item.id, questionText: value }))
   }

   useEffect(() => {
      autosize(questionRef.current);
   }, [questionRef.current])

   return (
      <li>
         <div className="question">
            <span>{++index}.</span>
            <textarea ref={questionRef} value={item.questionText} onChange={e => onChangeQuestion(e.target.value)} />
         </div>
      </li>
   );
}

export default QuestionItem;