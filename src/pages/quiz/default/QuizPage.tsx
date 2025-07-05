import "../../../scss/pages/Quiz.scss";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks";
import { Navigate, useNavigate } from "react-router-dom";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import { setTotalCounts } from "../../../redux/slice/quizSlice";
import { SectionInterface } from '../../dashboard/interfaces';

const QuizPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const section: SectionInterface | null = useAppSelector((state) => state.quiz.modifiedSection);
  const { flipped, isChecking, totalCounts, complete } = useAppSelector((state) => state.quiz);

  const [activeIndex, setActiveIndex] = useState(0);

  if (!section?.questions?.length) return <Navigate to={"/"} />;
  
  useEffect(() => {
    if (!section?.questions?.length) {
      navigate('result');
    } else {
      dispatch(setTotalCounts(section.questions.length));
    }
  }, []);
  
  useEffect(() => {
    if (totalCounts > 0 && section.questions.length > 0) {
      setActiveIndex(totalCounts - section.questions.length);
    }
  }, [totalCounts, section.questions.length]);
  
  if (complete) return <Navigate to={"result"} />;
  
  return (
    <main className="quiz">
      <div className="container">
        <span className="title">
          {section.name} ({activeIndex + 1}/{totalCounts})
        </span>
        <div className={`card ${flipped ? "flipped" : ""}`}>
          <CardFront question={section.questions[0]} />
          <CardBack isChecking={isChecking} question={section.questions[0]} />
        </div>
      </div>
    </main>
  );
};

export default QuizPage;
