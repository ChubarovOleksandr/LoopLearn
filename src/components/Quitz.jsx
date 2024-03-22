import { useDispatch, useSelector } from 'react-redux';
import '../scss/components/Quitz.scss'
import { NavLink, Navigate } from 'react-router-dom';
import { removeQuestion, leftQuestion, addFailedQuestion } from '../redux/slice/quitzSlice';
import { useEffect, useRef, useState } from 'react';

const Quitz = () => {

   const dispatch = useDispatch();
   const { items: item, totalCounts: totalCounts, failedQuestion } = useSelector(state => state.quitz);
   const [isComplete, setIsComplete] = useState(false);
   const activeIndexRef = useRef(1);
   const [currVal, setCurrVal] = useState(0);
   const time = 10;

   const questionPassed = () => {
      if (item.questions.length - 1 > 0) {
         dispatch(removeQuestion(item.questions[0].id));
         activeIndexRef.current = activeIndexRef.current + 1;
      } else {
         setIsComplete(true);
      }
   }
   
   useEffect(() => {
      if(isComplete){
         const val = Math.round((1 - failedQuestion.length / totalCounts) * 100);
         currVal !== val && setTimeout(setCurrVal, time, currVal + 1);
      }
   }, [currVal, isComplete]);
   
   const questionFailed = () => {
      dispatch(leftQuestion());
      dispatch(addFailedQuestion(item.questions[0]))
   }

   if (!item.questions || item.questions.length === 0) {
      return <Navigate to="/" />
   }

   return (
      <main className='quitz'>
         <div className="container">
            <div className="title">{item.name} ({activeIndexRef.current}/{totalCounts})</div>
            {isComplete ?
               <>
                  <div className="question">Ваш успех {currVal} %</div>
                  <div className="buttons">
                     <NavLink to='/'>Вернуться</NavLink>
                  </div>
               </>
               :
               <>
                  <div className="question">{item.questions[0].question}</div>
                  <div className="buttons">
                     <button className='confirm' onClick={questionPassed}>Могу ответить</button>
                     <button className='reject' onClick={questionFailed}>Не могу ответить</button>
                  </div>
               </>
            }
         </div>
      </main>
   );
}

export default Quitz;