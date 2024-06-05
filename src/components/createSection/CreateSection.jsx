import '../../scss/pages/CreateSection.scss'
import CreateSectionForm from './CreateSectionForm';
import QuestionList from './QuestionList';

const CreateSection = () => {

   return (
      <main className='create-section wrapper'>
         <div className="create-section__body">
            <h1>Создание отдела</h1>
            <CreateSectionForm />
            <QuestionList />
         </div>
      </main>
   );
}

export default CreateSection;