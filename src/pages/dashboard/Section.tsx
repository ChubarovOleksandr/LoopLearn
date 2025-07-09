import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Image from '@components/Image';
import { ImageNameEnum } from '@enums/imageNameEnum';
import { SectionInterface } from '@pages/dashboard/interfaces';
import SectionOptions from '@pages/dashboard/SectionOptions';
import { useAppSelector } from '@utils/hooks';

import { setOriginSection } from 'src/redux/slice/quizSlice';

import '../../scss/pages/Dashboard.scss';

interface Props {
  item: SectionInterface;
}

const Section = ({ item }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const optionsRef = useRef<HTMLDivElement | null>(null);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const selectedMode = useAppSelector(state => state.global.selectedMode);

  const onPlayHandler = () => {
    dispatch(setOriginSection(item));
    navigate('quiz/' + selectedMode);
  };

  useEffect(() => {
    const toggleIsOpened = (event: MouseEvent) => {
      if (optionsRef.current && !event.composedPath().includes(optionsRef.current)) {
        setIsOptionsVisible(false);
      }
    };

    document.addEventListener('click', toggleIsOpened);

    return () => {
      document.removeEventListener('click', toggleIsOpened);
    };
  }, [isOptionsVisible]);

  return (
    <div className="section">
      <div className="functions" ref={optionsRef}>
        <button
          className={isOptionsVisible ? 'visible options' : 'options'}
          onClick={() => setIsOptionsVisible(!isOptionsVisible)}
        >
          <Image name={ImageNameEnum.Dots} alt={'Другие функции'} isReverse />
        </button>
        {isOptionsVisible && (
          <SectionOptions item={item} setIsOptionsVisible={setIsOptionsVisible} />
        )}
      </div>
      <div className="title">{item.name}</div>
      <div className="details">
        <ul>
          {item.questions.map((question, index) => {
            return <li key={index}>{question.questionText}</li>;
          })}
        </ul>
      </div>
      <button onClick={() => onPlayHandler()} className="play">
        <Image name={ImageNameEnum.Play} alt={'Начать'} />
      </button>
    </div>
  );
};

export default Section;
