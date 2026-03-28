import { Pencil, Trash2, Upload } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Icon } from '@components/Icon';
import { RoutesEnum } from '@enums/routesEnum';
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
    navigate(RoutesEnum.Create);
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
        <Icon icon={Pencil} size="20px" />
        Редактировать
      </button>
      <button className="export" onClick={onExportHandler}>
        <Icon icon={Upload} size="20px" />
        Экспортировать
      </button>
      <button className="remove" onClick={onRemoveHandler}>
        <Icon icon={Trash2} size="20px" />
        Удалить
      </button>
    </div>
  );
};

export default SectionOptions;
