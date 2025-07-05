import React from 'react';
import whiteEditIcon from '../../assets/img/white-edit.png';
import blackEditIcon from '../../assets/img/black-edit.png';
import whiteTrashIcon from '../../assets/img/white-trash-bin.png';
import blackTrashIcon from '../../assets/img/black-trash-bin.png';
import whiteExportIcon from '../../assets/img/white-export.png';
import blackExportIcon from '../../assets/img/black-export.png';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../utils/hooks';
import { removeDoneSection, setNewSection } from '../../redux/slice/sectionsSlice';
import { exportTextFile } from '../../utils/exportFile';
import { SectionInterface } from './interfaces';
import { srcThemeSwapper } from '../../utils/srcThemeSwapper';

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
        <img
          src={srcThemeSwapper({
            iconForWhiteTheme: blackEditIcon,
            iconForDarkTheme: whiteEditIcon,
          })}
          alt="Edit"
        />
        <span>Редактировать</span>
      </button>
      <button className="export" onClick={onExportHandler}>
        <img
          src={srcThemeSwapper({
            iconForDarkTheme: whiteExportIcon,
            iconForWhiteTheme: blackExportIcon,
          })}
          alt="Export"
        />
        <span>Экспортировать</span>
      </button>
      <button className="remove" onClick={onRemoveHandler}>
        <img
          src={srcThemeSwapper({
            iconForWhiteTheme: blackTrashIcon,
            iconForDarkTheme: whiteTrashIcon,
          })}
          alt="Delete"
        />
        <span>Удалить</span>
      </button>
    </div>
  );
};

export default SectionOptions;
