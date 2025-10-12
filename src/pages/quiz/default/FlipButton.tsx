import { useDispatch } from 'react-redux';

import { changeFlipped, changeIsChecking } from 'src/redux/slice/quizSlice';

interface Props {
  text: string;
}

const FlipButton = ({ text }: Props) => {
  const dispatch = useDispatch();

  const questionFailed = () => {
    dispatch(changeFlipped());
    dispatch(changeIsChecking(false));
  };

  return (
    <button className="reject" onClick={questionFailed}>
      {text}
    </button>
  );
};

export default FlipButton;
