import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import blackDotsIcon from '../../assets/img/black-dots.png';
import blackPlayIcon from '../../assets/img/black-play.png';
import whiteDotsIcon from '../../assets/img/white-dots.png';
import whitePlayIcon from '../../assets/img/white-play.png';
import { setOriginSection } from '../../redux/slice/quizSlice';
import { useAppSelector } from '../../utils/hooks';
import { srcThemeSwapper } from '../../utils/srcThemeSwapper';
import { SectionInterface } from './interfaces';
import SectionOptions from './SectionOptions';
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
          <img
            src={srcThemeSwapper({
              iconForDarkTheme: blackDotsIcon,
              iconForWhiteTheme: whiteDotsIcon,
            })}
            alt="other-functions"
          />
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
        <img
          src={srcThemeSwapper({
            iconForDarkTheme: whitePlayIcon,
            iconForWhiteTheme: blackPlayIcon,
          })}
          alt="play"
        />
      </button>
    </div>
  );
};

export default Section;
