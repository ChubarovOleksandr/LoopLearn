import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { RoutesEnum } from '@enums/routesEnum';
import { countPercent } from '@utils/countProcent';
import { useAppDispatch, useAppSelector } from '@utils/hooks';

import { resetState, setOriginSection } from 'src/redux/slice/quizSlice';

const ResultPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { totalCounts, failedQuestion, originSection } = useAppSelector(state => state.quiz);
  const selectedMode = useAppSelector(state => state.global.selectedMode);

  const [currVal, setCurrVal] = useState(0);

  const endQuiz = () => {
    dispatch(resetState());
  };

  const onRestart = async () => {
    const item = originSection;

    endQuiz();
    dispatch(setOriginSection(item));

    navigate(`/${RoutesEnum.Quiz}/${selectedMode}`);
  };

  useEffect(() => {
    countPercent({ totalCounts, failedQuestion, currVal, setCurrVal, time: 10 });
  }, [currVal, failedQuestion, totalCounts]);

  return (
    <main className="quiz">
      <div className="container">
        <div className="question">Ваш успех {currVal} %</div>
        <div className="buttons">
          <NavLink onClick={endQuiz} to={RoutesEnum.Home}>
            Вернуться
          </NavLink>
          <button onClick={onRestart}>Пройти заново</button>
        </div>
      </div>
    </main>
  );
};

export default ResultPage;
