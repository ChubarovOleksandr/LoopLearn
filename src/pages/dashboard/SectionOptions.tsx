import React from 'react';
import { useNavigate } from 'react-router-dom';

import Image from '@components/Image';
import { ImageNameEnum } from '@enums/imageNameEnum';
import { SectionInterface } from '@pages/dashboard/interfaces';
import { exportTextFile } from '@utils/exportFile';
import { useAppDispatch } from '@utils/hooks';

import { removeDoneSection, setNewSection } from 'src/redux/slice/sectionsSlice';

interface PropsInterface {
  item: SectionInterface;
  setIsOptionsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const SectionOptions = ({ item, setIsOptionsVisible }: PropsInterface) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onChangeHandler = () => {
    dispatch(setNewSection(item));
    navigate('/create');
  };

  const onExportHandler = () => {
    const exportDataArrays = item.questions.map(question => {
      if (question.answer) {
        return `${question.questionText} - ${question.answer}`;
      }
      return question.questionText;
    });

    const exportDataSting = exportDataArrays.join('\n');

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
        <Image name={ImageNameEnum.Edit} alt={'Редактировать'} />
        <span>Редактировать</span>
      </button>
      <button className="export" onClick={onExportHandler}>
        <Image name={ImageNameEnum.Export} alt={'Експортировать'} />
        <span>Экспортировать</span>
      </button>
      <button className="remove" onClick={onRemoveHandler}>
        <Image name={ImageNameEnum.Bin} alt={'Удалить'} />
        <span>Удалить</span>
      </button>
    </div>
  );
};

export default SectionOptions;
