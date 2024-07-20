import autosize from "autosize";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { changeQuestion, removeAnswer, removeQuestion, setAnswer } from "../../redux/slice/sectionsSlice";
import enterArrow from '../../assets/img/enter-arrow.png';
import { IQuestion } from "../dashboard/Dashboard";

interface IProps {
   item: IQuestion,
   index: number
}

const QuestionItem: React.FC<IProps> = ({ item, index }) => {

   const dispatch = useDispatch();

   const questionRef = useRef<HTMLTextAreaElement | null>(null);
   const answerRef = useRef<HTMLTextAreaElement | null>(null);

   const [isAnswerVisible, setIsAnswerVisible] = useState(!!item.answer);

   const onChangeQuestion = (value: string) => {
      dispatch(changeQuestion({ id: item.id, questionText: value }))
   }

   const onRemoveQuestion = () => {
      dispatch(removeQuestion({ id: item.id }));
   }
   
   const onAnswerChangeText = (value: string) => {
      dispatch(setAnswer({id: item.id, answer: value}));
   }

   const onRemoveAnswer = () => {
      dispatch(removeAnswer({id: item.id}));
      setIsAnswerVisible(false);
   }

   useEffect(() => {
      if (questionRef.current) autosize(questionRef.current);
      if (answerRef.current) autosize(answerRef.current);
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
               <textarea onChange={(event) => onAnswerChangeText(event.target.value)} ref={answerRef} value={item.answer} rows={1}></textarea>
               <button className="answer__remove" onClick={() => onRemoveAnswer()}>-</button>
            </div>
         }
      </li>
   );
}

export default QuestionItem;