import { useDispatch, useSelector } from 'react-redux';
import '../scss/components/Quitz.scss'
import { Navigate } from 'react-router-dom';
import { removeQuestion, leftQuestion } from '../redux/slice/quitzSlice';
import { useRef } from 'react';

const Quitz = () => {

   const dispatch = useDispatch();
   const { items: item, totalCounts: totalCounts } = useSelector(state => state.quitz);
   const activeIndexRef = useRef(1);
   
   const questionPassed = () => {
      if (item.questions.length - 1 > 0) {
         dispatch(removeQuestion(item.questions[0].id));
         activeIndexRef.current = activeIndexRef.current + 1;
      } else {
         console.log('Вы прошли всю проверку');
      }
   }

   const questionFailed = () => {
      dispatch(leftQuestion());
   }

   if (!item.questions || item.questions.length === 0) {
      return <Navigate to="/" />
   }

   return (
      <main>
         <div className="container">
            <div className="title">{item.name} ({activeIndexRef.current}/{totalCounts})</div>
            <div className="question">{item.questions[0].question}</div>
            <div className="buttons">
               <button className='confirm' onClick={questionPassed}>Могу ответить</button>
               <button className='reject' onClick={questionFailed}>Не могу ответить</button>
            </div>
         </div>
      </main>
   );
}

export default Quitz;