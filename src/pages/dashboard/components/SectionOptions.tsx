import { Pencil, Trash2, Upload } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Icon } from '@components/Icon';
import { RoutesEnum } from '@enums/routesEnum';
import { SectionInterface } from '@pages/dashboard/interfaces';
import { removeDoneSection, setNewSection } from '@store/slice/sectionsSlice';
import { exportTextFile } from '@utils/exportFile';
import { useAppDispatch } from '@utils/hooks';

import { isExist } from '../../../utils/isData';

interface PropsInterface {
  item: SectionInterface;
  setIsOptionsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const iconSize = '20px';

const SectionOptions = ({ item, setIsOptionsVisible }: PropsInterface) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onChangeHandler = () => {
    dispatch(setNewSection(item));
    navigate(RoutesEnum.Create);
  };

  const onExportHandler = () => {
    const exportDataArrays = item.questions.map(question => {
      if (isExist(question.answer)) {
        return `${question.questionText} - ${question.answer}`;
      }
      return question.questionText;
    });

    const exportDataSting = exportDataArrays.join('\n');

    exportTextFile(exportDataSting, item.name);
  };

  const onRemoveHandler = () => {
    if (isExist(item.id)) {
      dispatch(removeDoneSection(item.id));
      setIsOptionsVisible(false);
      window.location.reload();
    }
  };

  return (
    <div className="options-body">
      <button className="change" onClick={onChangeHandler}>
        <Icon icon={Pencil} size={iconSize} />
        Редактировать
      </button>
      <button className="export" onClick={onExportHandler}>
        <Icon icon={Upload} size={iconSize} />
        Экспортировать
      </button>
      <button className="remove" onClick={onRemoveHandler}>
        <Icon icon={Trash2} size={iconSize} />
        Удалить
      </button>
    </div>
  );
};

export default SectionOptions;
