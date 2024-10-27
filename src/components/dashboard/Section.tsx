import play from "../../assets/img/play.png";
import "../../scss/pages/Dashboard.scss";
import more from "../../assets/img/ellipsis.png";
import edit from "../../assets/img/edit.png";
import trash from "../../assets/img/trash-bin.png";
import download from "../../assets/img/export.png";
import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { removeDoneSection, setNewSection } from "../../redux/slice/sectionsSlice";
import { setCurrentSection } from "../../redux/slice/quitzSlice";
import { ISection } from "./Dashboard";
import { useAppDispatch } from "../../utils/hooks";
import { exportTextFile } from "../../utils/exportFile";
import { getDataFromLS } from "../../utils/LS";

interface IProps {
  item: ISection;
}

const Section: React.FC<IProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const optionsRef = useRef<HTMLDivElement | null>(null);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const onChangeHandler = () => {
    dispatch(setNewSection(item));
    navigate("/create");
  };

  const onExportHandler = () => {
    const exportDataArrays = item.questions.map(question => {
      if(question.answer){
        return question.questionText + ' - ' + question.answer; 
      }
      return question.questionText
    })

    const exportDataSting = exportDataArrays.join('\n');
    
    exportTextFile(exportDataSting, item.name);
  };

  const onRemoveHandler = () => {
    if (item.id) {
      dispatch(removeDoneSection(item.id));
      setIsOptionsVisible(false);
      window.location.reload();
    }
  };

  const onPlayHandler = () => {
    dispatch(setCurrentSection(item));
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
          <div className="options-body">
            <button className="change" onClick={onChangeHandler}>
              <img src={edit} alt="Change Icon" />
              <span>Редактировать</span>
            </button>
            <button className="export" onClick={onExportHandler}>
              <img src={download} alt="Export Icon" />
              <span>Экспортировать</span>
            </button>
            <button className="remove" onClick={onRemoveHandler}>
              <img src={trash} alt="Trash Icon" />
              <span>Удалить</span>
            </button>
          </div>
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
      <NavLink to="quitz" onClick={() => onPlayHandler()} className="play">
        <img src={play} alt="play" />
      </NavLink>
    </div>
  );
};

export default Section;
