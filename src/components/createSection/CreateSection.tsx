import { useDispatch, useSelector } from "react-redux";
import "../../scss/pages/CreateSection.scss";
import CreateSectionForm from "./CreateSectionForm";
import QuestionList from "./QuestionList";
import { saveSection, updateSection } from "../../redux/slice/sectionsSlice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux";
import { IQuestion, ISection } from "../dashboard/Dashboard";
import { useAppDispatch, useAppSelector } from '../../utils/hooks';

const CreateSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const question: IQuestion[] = useAppSelector((state) => state.section.newSection.questions);
  const section: ISection = useAppSelector((state) => state.section.newSection);

  const onSaveSection = () => {
    if (!section.id) {
      dispatch(saveSection({ ...section, id: uuidv4() }));
    } else {
      dispatch(updateSection(section));
    }
    navigate("/");
  };

  return (
    <main className="create-section wrapper">
      <div className="create-section__body">
        <h1>Создание отдела</h1>
        <CreateSectionForm />
        {question.length > 0 && (
          <button className="create-section__save-btn" onClick={onSaveSection}>
            Сохранить
          </button>
        )}
        <QuestionList/>
      </div>
    </main>
  );
};

export default CreateSection;
