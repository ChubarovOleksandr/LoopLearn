import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import { countPercent } from '../../../utils/countProcent';
import { resetState, setOriginSection } from '../../../redux/slice/quizSlice';

const ResultPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { totalCounts, failedQuestion, originSection } = useAppSelector(state => state.quiz);
  const selectedMode = useAppSelector(state => state.global.selectedMode);

  const [currVal, setCurrVal] = useState(0);

  const onRestart = async () => {
    const item = originSection;
    await dispatch(resetState());
    await dispatch(setOriginSection(item));
    navigate('/quiz/' + selectedMode);
  };

  useEffect(() => {
    countPercent({ totalCounts, failedQuestion, currVal, setCurrVal, time: 10 });
  }, [currVal]);

  return (
    <main className="quiz">
      <div className="container">
        <div className="question">Ваш успех {currVal} %</div>
        <div className="buttons">
          <NavLink to="/">Вернуться</NavLink>
          <button onClick={onRestart}>Пройти заново</button>
        </div>
      </div>
    </main>
  );
};

export default ResultPage;
