import CreateSectionName from './CreateSectionName';
import CreateSectionQuestion from './CreateSectionQuestion';
import '../../scss/components/Form.scss';

const CreateSectionForm = () => {
  return (
    <form className="create-section__form form">
      <CreateSectionName />
      <CreateSectionQuestion />
    </form>
  );
};

export default CreateSectionForm;
