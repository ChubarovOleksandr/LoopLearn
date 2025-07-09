import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import CreateSectionForm from '@pages/createSection/CreateSectionForm';
import QuestionList from '@pages/createSection/QuestionList';
import { QuestionInterface, SectionInterface } from '@pages/dashboard/interfaces';
import { useAppDispatch, useAppSelector } from '@utils/hooks';
import { isNotEmptyArray } from '@utils/isData';

import { saveSection, updateSection } from 'src/redux/slice/sectionsSlice';

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
