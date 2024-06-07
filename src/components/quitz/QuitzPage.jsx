import { useDispatch, useSelector } from 'react-redux';
import '../../scss/pages/Quitz.scss'
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { addFailedQuestion, leftQuestion, removePassedQuestion, setTotalCounts } from '../../redux/slice/quitzSlice';
import { useEffect, useRef, useState } from 'react';

const QuitzPage = () => {

   const dispatch = useDispatch();

   const section = useSelector(state => state.quitz.currentSection);
   const { totalCounts, failedQuestion } = useSelector(state => state.quitz);

   const [isComplete, setIsComplete] = useState(false);
   const [currVal, setCurrVal] = useState(0);

   const time = 10;

   const activeIndexRef = useRef(1);
   const cardRef = useRef();

   const questionPassed = () => {
      if (section.questions.length - 1 > 0) {
         dispatch(removePassedQuestion({ id: section.questions[0].id }));
         activeIndexRef.current = activeIndexRef.current + 1;
      } else {
         setIsComplete(true);
      }
   }

   const questionFailed = () => {
      // dispatch(leftQuestion());
      // dispatch(addFailedQuestion(section.questions[0]));
      cardRef.current.classList.add('flip-vertical-right');
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
               <>
                  <div className="card" ref={cardRef}>
                     <div className="question" >{section.questions[0].questionText}</div>
                     <div className="buttons">
                        <button className='confirm' onClick={questionPassed}>Могу ответить</button>
                        <button className='reject' onClick={questionFailed}>Не могу ответить</button>
                     </div>
                  </div>
               </>
            }
         </div>
      </main>
   );
}

export default QuitzPage;