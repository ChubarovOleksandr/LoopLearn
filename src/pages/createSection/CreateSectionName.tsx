import { useAppDispatch, useAppSelector } from '@utils/hooks';

import { setSectionName } from 'src/redux/slice/sectionsSlice';

const CreateSectionName = () => {
  const dispatch = useAppDispatch();

  const name = useAppSelector(state => state.section.newSection.name);

  const onChangeSectionName = (value: string) => {
    dispatch(setSectionName(value));
  };

  return (
    <div className="form__part">
      <span className="highlighted">Введите название</span>
      <input
        type="text"
        maxLength={40}
        value={name}
        onChange={e => onChangeSectionName(e.target.value)}
      />
    </div>
  );
};

export default CreateSectionName;
