import play from "../../assets/img/play.png";
import "../../scss/pages/Dashboard.scss";
import more from "../../assets/img/ellipsis.png";
import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { setCurrentSection } from "../../redux/slice/quitzSlice";
import { ISection } from "./Dashboard";
import SectionOptions from "./SectionOptions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";

interface IProps {
  item: ISection;
}

const Section: React.FC<IProps> = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const optionsRef = useRef<HTMLDivElement | null>(null);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const selectedMode = useSelector((state: RootState) => state.global.selectedMode);

  const onPlayHandler = () => {
    dispatch(setCurrentSection(item));
    navigate(selectedMode);
  };

  useEffect(() => {
    const toggleIsOpened = (event: MouseEvent) => {
      if (optionsRef.current && !event.composedPath().includes(optionsRef.current)) {
        setIsOptionsVisible(false);
      }
    };

    document.addEventListener("click", toggleIsOpened);

    return () => {
      document.removeEventListener("click", toggleIsOpened);
    };
  }, [isOptionsVisible]);

  return (
    <div className="section">
      <div className="functions" ref={optionsRef}>
        <button
          className={isOptionsVisible ? "visible options" : "options"}
          onClick={() => setIsOptionsVisible(!isOptionsVisible)}
        >
          <img src={more} alt="other-functions" />
        </button>
        {isOptionsVisible && (
          <SectionOptions item={item} setIsOptionsVisible={setIsOptionsVisible} />
        )}
      </div>
      <div className="title">{item.name}</div>
      <div className="details">
        <ul>
          {item.questions.map((question, index) => {
            return <li key={index}>{question.questionText}</li>;
          })}
        </ul>
      </div>
      <button onClick={() => onPlayHandler()} className="play">
        <img src={play} alt="play" />
      </button>
    </div>
  );
};

export default Section;
