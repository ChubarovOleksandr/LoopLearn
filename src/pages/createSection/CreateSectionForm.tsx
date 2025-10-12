import CreateSectionName from '@pages/createSection/CreateSectionName';
import CreateSectionQuestion from '@pages/createSection/CreateSectionQuestion';

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
