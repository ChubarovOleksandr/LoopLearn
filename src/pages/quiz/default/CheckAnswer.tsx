import { useDispatch } from 'react-redux';

import { changeFlipped, changeIsChecking } from 'src/redux/slice/quizSlice';

const CheckAnswer = () => {
  const dispatch = useDispatch();

  const checkAnswer = () => {
    dispatch(changeFlipped());
    dispatch(changeIsChecking(true));
  };

  return (
    <button className="check" onClick={checkAnswer}>
      Проверить
    </button>
  );
};

export default CheckAnswer;
