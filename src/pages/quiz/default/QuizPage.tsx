import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import CardBack from '@pages/quiz/default/CardBack';
import CardFront from '@pages/quiz/default/CardFront';
import { useAppDispatch, useAppSelector } from '@utils/hooks';
import { isEmptyArray, isExist, isNotEmptyArray } from '@utils/isData';

import { setTotalCounts } from 'src/redux/slice/quizSlice';

import '../../../scss/pages/Quiz.scss';

const QuizPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const section = useAppSelector(state => state.quiz.modifiedSection);
  const { flipped, isChecking, totalCounts, complete } = useAppSelector(state => state.quiz);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (isExist(section)) {
      if (isNotEmptyArray(section.questions)) {
        dispatch(setTotalCounts(section.questions.length));
      } else {
        navigate('result');
      }
    }
  }, [dispatch, navigate, section]);

  useEffect(() => {
    if (totalCounts > 0 && isNotEmptyArray(section?.questions)) {
      setActiveIndex(totalCounts - section.questions.length);
    }
  }, [totalCounts, section?.questions]);

  if (!isExist(section) || isEmptyArray(section.questions)) return <Navigate to={'/'} />;

  if (complete) return <Navigate to={'result'} />;

  return (
    <main className="quiz">
      <div className="container">
        <span className="title">
          {section.name} ({activeIndex + 1}/{totalCounts})
        </span>
        <div className={`card ${flipped ? 'flipped' : ''}`}>
          <CardFront question={section.questions[0]} />
          <CardBack isChecking={isChecking} question={section.questions[0]} />
        </div>
      </div>
    </main>
  );
};

export default QuizPage;
