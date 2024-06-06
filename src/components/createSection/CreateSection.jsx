import { useSelector } from 'react-redux';
import '../../scss/pages/CreateSection.scss'
import CreateSectionForm from './CreateSectionForm';
import QuestionList from './QuestionList';

const CreateSection = () => {

   const question = useSelector(state => state.section.newSection.questions);

   const onSaveSection = () => {
      dispa
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