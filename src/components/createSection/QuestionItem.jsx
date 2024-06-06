import autosize from "autosize";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { changeQuestion, removeAnswer, removeQuestion, setAnswer } from "../../redux/slice/sectionsSlice";
import enterArrow from '../../assets/img/enter-arrow.png';

const QuestionItem = ({ item, index }) => {

   const dispatch = useDispatch();

   const questionRef = useRef();
   const answerRef = useRef();

   const [isAnswerVisible, setIsAnswerVisible] = useState(!!item.answer);

   const onChangeQuestion = (value) => {
      dispatch(changeQuestion({ id: item.id, questionText: value }))
   }

   const onRemoveQuestion = () => {
      dispatch(removeQuestion({ id: item.id }));
   }
   
   const onAnswerChangeText = (value) => {
      dispatch(setAnswer({id: item.id, answer: value}));
   }

   const onRemoveAnswer = () => {
      dispatch(removeAnswer({id: item.id}));
      setIsAnswerVisible(false);
   }

   useEffect(() => {
      autosize(questionRef.current);
      autosize(answerRef.current);
   }, [questionRef.current, answerRef.current])

   return (
      <li>
         <div className="question">
            <textarea ref={questionRef} value={item.questionText} className={isAnswerVisible ? 'w500' : ''} onChange={e => onChangeQuestion(e.target.value)} />
            <button onClick={onRemoveQuestion} className="question__remove">-</button>
            {item.answer === undefined && isAnswerVisible === false  &&
               <button onClick={() => setIsAnswerVisible(true)} className="question__add-answer"><img src={enterArrow} alt="add answer" /></button>
            }
         </div>
         {isAnswerVisible &&
            <div className="answer">
               <div className="corner">
                  <div className="corner-shape"></div>
               </div>
               <textarea onChange={(event) => onAnswerChangeText(event.target.value)} ref={answerRef} value={item.answer} rows="1"></textarea>
               <button className="answer__remove" onClick={() => onRemoveAnswer()}>-</button>
            </div>
         }
      </li>
   );
}

export default QuestionItem;