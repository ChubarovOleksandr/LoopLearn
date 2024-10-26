import autosize from "autosize";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { changeQuestion, removeAnswer, removeQuestion, setAnswer } from "../../redux/slice/sectionsSlice";
import enterArrow from '../../assets/img/enter-arrow.png';
import { IQuestion } from "../dashboard/Dashboard";
import { useAppDispatch } from "../../utils/hooks";

interface IProps {
  item: IQuestion;
  isAnswerShow: boolean;
}

const QuestionItem: React.FC<IProps> = ({ item, isAnswerShow }) => {  
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
          className={isAnswerVisible ? "w500" : ""}
          onChange={(e) => onChangeQuestion(e.target.value)}
        />
        {item.answer === undefined && isAnswerVisible === false && (
          <button onClick={() => setIsAnswerVisible(true)} className="question__add-answer">
            <img src={enterArrow} alt="add answer" />
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
            onChange={(event) => onAnswerChangeText(event.target.value)}
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