import React, { useState } from 'react';
import '../../scss/components/DropArea.scss';
import blackCloseIcon from '../../assets/img/black-close.png';
import whiteCloseIcon from '../../assets/img/white-close.png';
import { useAppDispatch } from '../../utils/hooks';
import { IQuestion } from '../dashboard/Dashboard';
import { saveSection } from '../../redux/slice/sectionsSlice';
import { v4 as uuidv4 } from 'uuid';
import { srcThemeSwapper } from '../srcThemeSwapper';

interface DropAreaProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropArea = ({ onClose }: DropAreaProps) => {
  const dispatch = useAppDispatch();

  const [error, setError] = useState('');
  const [drag, setDrag] = useState(false);

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(false);
  };

  const processText = (text: string, fileName: string) => {
    const questionsArray = text.split('\n').map((item, index) => {
      const pairArray = item.split(' - ');
      const returnedValue: IQuestion = { questionText: pairArray[0], id: index };
      if (pairArray[1]) {
        returnedValue.answer = pairArray[1];
      }
      return returnedValue;
    });
    dispatch(
      saveSection({
        name: fileName.replace('.txt', ''),
        questions: questionsArray,
        showAnswerByDefault: true,
        id: uuidv4(),
      }),
    );
  };

  const onDropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDrag(false);

    const files = event.dataTransfer.files;
    if (files.length > 0 && files.length < 2) {
      const file = files[0];

      if (file.type === 'text/plain') {
        const reader = new FileReader();

        reader.onload = e => {
          const result = e.target?.result;
          if (typeof result === 'string') {
            const fileContent: string = result;
            processText(fileContent, file.name);
            onClose(false);
          }
        };

        reader.onerror = () => {
          setError('Ошибка при чтении файла');
        };

        reader.readAsText(file);
      } else {
        setError('Пожалуйста, загрузите один файл с расширением .txt');
      }
    } else {
      setError('Пожалуйста, загрузите один файл');
    }
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0 && files.length < 2) {
      const file = files[0];

      if (file.type === 'text/plain') {
        const reader = new FileReader();

        reader.onload = e => {
          const result = e.target?.result;
          if (typeof result == 'string') {
            const fileContent: string = result;
            processText(fileContent, file.name);
            onClose(false);
          }
        };

        reader.onerror = () => {
          setError('Ошибка при чтении файла');
        };

        reader.readAsText(file);
      } else {
        setError('Пожалуйста, загрузите файл с расширением .txt');
      }
    } else {
      setError('Пожалуйста, загрузите один файл');
    }
  };

  return (
    <div id="portal">
      <div
        className="drop-area"
        onDrop={e => onDropHandler(e)}
        onDragOver={e => dragStartHandler(e)}
        onDragLeave={e => dragLeaveHandler(e)}
        onDragStart={e => dragStartHandler(e)}
      >
        <button className="close" onClick={() => onClose(false)}>
          <img
            src={srcThemeSwapper({
              iconForDarkTheme: whiteCloseIcon,
              iconForWhiteTheme: blackCloseIcon,
            })}
            alt="Close"
          />
        </button>
        {drag ? (
          <span>Отпустите, чтобы файл загрузился</span>
        ) : error ? (
          <div className="error-block">
            <span className="error">{error}</span>
            <button onClick={() => setError('')}>Попробовать ещё</button>
          </div>
        ) : (
          <span>
            Перетащите файлы сюда, или нажмите
            <label htmlFor="drop-file__input">здесь</label>
            <input onChange={onFileChange} id="drop-file__input" type="file" accept=".txt" />
          </span>
        )}
      </div>
    </div>
  );
};

export default DropArea;
