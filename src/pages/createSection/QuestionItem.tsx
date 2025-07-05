import autosize from 'autosize';
import { useEffect, useRef, useState } from 'react';
import {
  changeQuestion,
  removeAnswer,
  removeQuestion,
  setAnswer,
} from '../../redux/slice/sectionsSlice';
import whiteArrowIcon from '../../assets/img/white-enter-arrow.png';
import blackArrowIcon from '../../assets/img/black-enter-arrow.png';
import { useAppDispatch } from '../../utils/hooks';
import { srcThemeSwapper } from '../../utils/srcThemeSwapper';
import { QuestionInterface } from '../dashboard/interfaces';

interface Props {
  item: QuestionInterface;
  isAnswerShow: boolean;
}

const QuestionItem = ({ item, isAnswerShow }: Props) => {
  const dispatch = useAppDispatch();

  const questionRef = useRef<HTMLTextAreaElement | null>(null);
  const answerRef = useRef<HTMLTextAreaElement | null>(null);

  const [isAnswerVisible, setIsAnswerVisible] = useState(isAnswerShow || !!item.answer);

  const onChangeQuestion = (value: string) => {
    dispatch(changeQuestion({ id: item.id, questionText: value }));
  };

  const onRemoveQuestion = () => {
    dispatch(removeQuestion({ id: item.id }));
  };

  const onAnswerChangeText = (value: string) => {
    dispatch(setAnswer({ id: item.id, answer: value }));
  };

  const onRemoveAnswer = () => {
    dispatch(removeAnswer({ id: item.id }));
    setIsAnswerVisible(false);
  };

  useEffect(() => {
    if (questionRef.current) autosize(questionRef.current);
    if (answerRef.current) autosize(answerRef.current);
  }, [questionRef.current, answerRef.current]);

  return (
    <li>
      <div className="question">
        <textarea
          ref={questionRef}
          value={item.questionText}
          className={isAnswerVisible ? 'w450' : ''}
          onChange={e => onChangeQuestion(e.target.value)}
        />
        {item.answer === undefined && !isAnswerVisible && (
          <button onClick={() => setIsAnswerVisible(true)} className="question__add-answer">
            <img
              src={srcThemeSwapper({
                iconForWhiteTheme: blackArrowIcon,
                iconForDarkTheme: whiteArrowIcon,
              })}
              alt="Добавить ответ"
            />
          </button>
        )}
        <button onClick={onRemoveQuestion} className="question__remove">
          -
        </button>
      </div>
      {isAnswerVisible && (
        <div className="answer">
          <div className="corner">
            <div className="corner-shape"></div>
          </div>
          <textarea
            onChange={event => onAnswerChangeText(event.target.value)}
            ref={answerRef}
            value={item.answer || ''}
            rows={1}
          ></textarea>
          <button className="answer__remove" onClick={() => onRemoveAnswer()}>
            -
          </button>
        </div>
      )}
    </li>
  );
};

export default QuestionItem;
