import { useDispatch, useSelector } from 'react-redux';
import '../../scss/pages/CreateSection.scss'
import CreateSectionForm from './CreateSectionForm';
import QuestionList from './QuestionList';
import { saveSection } from '../../redux/slice/sectionsSlice';
import { setDataToLS } from '../../utils/LS';
import { useNavigate } from 'react-router-dom';

const CreateSection = () => {

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const question = useSelector(state => state.section.newSection.questions);
   const section = useSelector(state => state.section.newSection);

   const onSaveSection = () => {
      setDataToLS(section)
      dispatch(saveSection());
      navigate('/');
   }

   return (
      <main className='create-section wrapper'>
         <div className="create-section__body">
            <h1>Создание отдела</h1>
            <CreateSectionForm />
            <QuestionList />
            {question.length > 0 &&
               <button className='create-section__save-btn' onClick={onSaveSection}>Сохранить</button>
            }
         </div>
      </main>
   );
}

export default CreateSection;