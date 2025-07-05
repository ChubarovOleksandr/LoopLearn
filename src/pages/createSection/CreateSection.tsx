import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { saveSection, updateSection } from '../../redux/slice/sectionsSlice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { isNotEmptyArray } from '../../utils/isData';
import { QuestionInterface, SectionInterface } from '../dashboard/interfaces';
import CreateSectionForm from './CreateSectionForm';
import QuestionList from './QuestionList';
import '../../scss/pages/CreateSection.scss';

const CreateSection = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const question: QuestionInterface[] = useAppSelector(state => state.section.newSection.questions);
  const section: SectionInterface = useAppSelector(state => state.section.newSection);

  const onSaveSection = () => {
    if (!section.id) {
      dispatch(saveSection({ ...section, id: uuidv4() }));
    } else {
      dispatch(updateSection(section));
    }
    navigate('/');
  };

  return (
    <main className="create-section wrapper">
      <div className="create-section__body">
        <h1>Создание отдела</h1>
        <CreateSectionForm />
        {isNotEmptyArray(question) && (
          <button className="create-section__save-btn" onClick={onSaveSection}>
            Сохранить
          </button>
        )}
        <QuestionList />
      </div>
    </main>
  );
};

export default CreateSection;
