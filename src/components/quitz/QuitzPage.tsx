import { useDispatch } from 'react-redux';
import '../../scss/pages/Quitz.scss'
import { NavLink, Navigate } from 'react-router-dom';
import { addFailedQuestion, leftQuestion, removePassedQuestion, setTotalCounts } from '../../redux/slice/quitzSlice';
import { useEffect, useRef, useState } from 'react';
import { ISection } from '../dashboard/Dashboard';
import { useAppSelector } from '../../utils/hooks';

const QuitzPage: React.FC = () => {

   const dispatch = useDispatch();

   const section: ISection | null = useAppSelector(state => state.quitz.currentSection);
   
   const { totalCounts, failedQuestion } = useAppSelector(state => state.quitz);

   const [isComplete, setIsComplete] = useState(false);
   const [currVal, setCurrVal] = useState(0);
   const [flipped, setFlipped] = useState(false);

   const time: number = 10;

   const activeIndexRef = useRef(1);

   const questionPassed = () => {
      if (section && section.questions.length - 1 > 0) {
         dispatch(removePassedQuestion({ id: section.questions[0].id }));
         activeIndexRef.current = activeIndexRef.current + 1;
      } else {
         setIsComplete(true);
      }
      setFlipped(false);
   }

   const questionFailed = () => {
      if (section) {
         dispatch(leftQuestion());
         dispatch(addFailedQuestion(section.questions[0]));
         setFlipped(false);
      }
   }

   const checkAnswer = () => {
      if (section && section.questions[0].answer){
         setFlipped(true);
      } else {
         questionFailed();
      }
   }

   if (!section || !section.questions || section.questions.length === 0) {
      return <Navigate to='/' />
   }

   useEffect(() => {
      if (isComplete) {
         const val = Math.round((1 - failedQuestion.length / totalCounts) * 100);
         currVal !== val && setTimeout(setCurrVal, time, currVal + 1);
      }
   }, [currVal, isComplete]);

   useEffect(() => {
      dispatch(setTotalCounts(section.questions.length))
   }, []);

   return (
      <main className='quitz'>
         <div className="container">
            <div className="title">{section.name} ({activeIndexRef.current}/{totalCounts})</div>
            {isComplete ?
               <>
                  <div className="question">Ваш успех {currVal} %</div>
                  <div className="buttons">
                     <NavLink to='/'>Вернуться</NavLink>
                  </div>
               </>
               :
               <div className={`card ${flipped ? 'flipped' : ''}`}>
                  <div className="card-front">
                     <div className="question" >{section.questions[0].questionText}</div>
                     <div className="buttons">
                        <button className='confirm' onClick={questionPassed}>Могу ответить</button>
                        <button className='reject' onClick={checkAnswer}>Не могу ответить</button>
                     </div>
                  </div>
                  <div className="card-back">
                     <div className="question" >{section.questions[0].answer}</div>
                     <div className="buttons">
                        <button className='check' onClick={questionFailed}>Следующий вопрос</button>
                     </div>
                  </div>
               </div>
            }
         </div>
      </main>
   );
}

export default QuitzPage;