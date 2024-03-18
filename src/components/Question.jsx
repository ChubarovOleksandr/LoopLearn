import { useEffect, useRef, useState } from "react";
import { changeSectionQuestion, removeSectionQuestion, addAnswer } from "../redux/slice/sectionsSlice";
import { useDispatch } from "react-redux";
import autosize from "autosize";
import enterArrow from '../assets/img/enter-arrow.png';

/* eslint-disable react/prop-types */
const Question = ({ item }) => {

   const [question, setQuestion] = useState(item.question);
   const [answer, setAnswer] = useState(item.answer);
   const dispatch = useDispatch();
   const questionRef = useRef();
   const answerRef = useRef();
   const [isAnswerVisible, setIsAnswerVisible] = useState(Boolean(item.answer));

   const onQuestionChangeText = (text) => {
      dispatch(changeSectionQuestion({ ...item, question: text }));
      setQuestion(text);
   }

   const onAnswerChangeText = (text) => {
      dispatch(addAnswer({ ...item, answer: text }));
      setAnswer(text);
   }

   const removeQuestion = () => {
      dispatch(removeSectionQuestion(item));
   }

   const removeAnswer = () => {
      dispatch(addAnswer({ ...item, answer: '' }));
      setAnswer('');
      setIsAnswerVisible(false);
   }

   useEffect(() => {
      autosize(questionRef.current);
      autosize(answerRef.current);
   }, [isAnswerVisible])

   return (
      <li>
         <textarea value={question} className={isAnswerVisible ? 'withoutEnterArrow' : ''}
            ref={questionRef} rows={1} onChange={(event) => onQuestionChangeText(event.target.value)} />
         <button className="minus" onClick={() => removeQuestion()}>-</button>
         {isAnswerVisible ?
            <div className="answer">
               <div className="corner">
                  <div className="corner-shape"></div>
               </div>
               <textarea onChange={(event) => onAnswerChangeText(event.target.value)} ref={answerRef} value={answer} name="answer" rows="1"></textarea>
               <button className="minus" onClick={() => removeAnswer()}>-</button>
            </div>
            :
            <button className="add" onClick={() => setIsAnswerVisible(true)}><img src={enterArrow} alt="Enter Arrow Icon" /></button>
         }
      </li>
   );
}

export default Question;