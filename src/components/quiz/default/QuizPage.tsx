import "../../../scss/pages/Quitz.scss";
import { useRef, useState } from "react";
import { useAppSelector } from "../../../utils/hooks";
import { ISection } from "../../dashboard/Dashboard";
import { Navigate } from "react-router-dom";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

const QuizPage: React.FC = () => {
  const section: ISection | null = useAppSelector((state) => state.quiz.currentSection);
  const { flipped, complete, isChecking } = useAppSelector((state) => state.quiz);

  const activeIndexRef = useRef(1);

  if (!section || !section.questions || section.questions.length == 0) {
    return <Navigate to={"/"} />;
  }

  if (complete) return <Navigate to={"/result"} />;

  return (
    <main className="quiz">
      <div className="container">
        <span className="title">
          {section.name} ({activeIndexRef.current}/{section.questions.length})
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
