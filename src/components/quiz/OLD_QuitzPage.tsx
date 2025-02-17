// import { useDispatch } from "react-redux";
// import "../../scss/pages/quiz.scss";
// import { NavLink, Navigate } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";
// import { useAppSelector } from "../../utils/hooks";
// import {
//   addFailedQuestion,
//   leftQuestion,
//   removePassedQuestion,
//   setTotalCounts,
// } from "../../redux/slice/quizSlice";

// const quizPage: React.FC = () => {
//   const dispatch = useDispatch();

//   const {
//     modifiedSection: section,
//     totalCounts,
//     failedQuestion,
//   } = useAppSelector((state) => state.quiz);

//   const [isComplete, setIsComplete] = useState(false);
//   const [currVal, setCurrVal] = useState(0);
//   const [flipped, setFlipped] = useState(false);

//   const time: number = 10;

//   const activeIndexRef = useRef(1);

//   const questionPassed = () => {
//     if (section && section.questions.length - 1 > 0) {
//       dispatch(removePassedQuestion({ id: section.questions[0].id }));
//       activeIndexRef.current = activeIndexRef.current + 1;
//     } else {
//       setIsComplete(true);
//     }
//     setFlipped(false);
//   };

//   const questionFailed = () => {
//     if (section) {
//       setFlipped(false);
//       setTimeout(() => {
//         dispatch(leftQuestion());
//         dispatch(addFailedQuestion(section.questions[0]));
//       }, 200);
//     }
//   };

//   const checkAnswer = () => {
//     if (section && section.questions[0].answer) {
//       setFlipped(true);
//     } else {
//       questionFailed();
//     }
//   };

//   if (!section || !section.questions || section.questions.length === 0) {
//     return <Navigate to="/" />;
//   }

//   useEffect(() => {
//     if (isComplete) {
//       console.log('Отвечено не правильно:', failedQuestion.length);
//       console.log('Общее кол-во вопросов:', totalCounts)
//       const val = Math.round((1 - failedQuestion.length / totalCounts) * 100);
//       currVal !== val && setTimeout(setCurrVal, time, currVal + 1);
//     }
//   }, [currVal, isComplete]);

//   useEffect(() => {
//     dispatch(setTotalCounts(section.questions.length));
//   }, []);

//   return (
//     <main className="quiz">
//       <div className="container">
//         <div className="title">
//           {section.name} ({activeIndexRef.current}/{totalCounts})
//         </div>
//         {isComplete ? (
//           <>
//             <div className="question">Ваш успех {currVal} %</div>
//             <div className="buttons">
//               <NavLink to="/">Вернуться</NavLink>
//             </div>
//           </>
//         ) : (
//           <div className={`card ${flipped ? "flipped" : ""}`}>
//             <div className="card-front">
//               <div className="question">{section.questions[0].questionText}</div>
//               <div className="buttons">
//                 <button className="confirm" onClick={questionPassed}>
//                   Могу ответить
//                 </button>
//                 <button className="reject" onClick={checkAnswer}>
//                   Не могу ответить
//                 </button>
//               </div>
//             </div>
//             <div className="card-back">
//               <div className="question">{section.questions[0].answer}</div>
//               <div className="buttons">
//                 <button className="check" onClick={questionFailed}>
//                   Следующий вопрос
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// };

// export default quizPage;
