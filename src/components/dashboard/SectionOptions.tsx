import edit from "../../assets/img/edit.png";
import trash from "../../assets/img/trash-bin.png";
import download from "../../assets/img/export.png";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../utils/hooks";
import { removeDoneSection, setNewSection } from "../../redux/slice/sectionsSlice";
import { ISection } from "./Dashboard";
import { exportTextFile } from "../../utils/exportFile";

interface IProps {
  item: ISection;
  setIsOptionsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const SectionOptions: React.FC<IProps> = ({ item, setIsOptionsVisible }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onChangeHandler = () => {
    dispatch(setNewSection(item));
    navigate("/create");
  };

  const onExportHandler = () => {
    const exportDataArrays = item.questions.map((question) => {
      if (question.answer) {
        return question.questionText + " - " + question.answer;
      }
      return question.questionText;
    });

    const exportDataSting = exportDataArrays.join("\n");

    exportTextFile(exportDataSting, item.name);
  };

  const onRemoveHandler = () => {
    if (item.id) {
      dispatch(removeDoneSection(item.id));
      setIsOptionsVisible(false);
      window.location.reload();
    }
  };

  return (
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
  );
};

export default SectionOptions;
