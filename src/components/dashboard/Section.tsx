import play from '../../assets/img/play.png';
import '../../scss/pages/Dashboard.scss'
import more from '../../assets/img/ellipsis.png'
import pencil from '../../assets/img/pencil.png'
import trash from '../../assets/img/trash-bin.png'
import { useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { removeDoneSection, setNewSection } from '../../redux/slice/sectionsSlice';
import { setCurrentSection } from '../../redux/slice/quitzSlice.ts';
import { ISection } from './Dashboard';

interface IProps {
   item: ISection,
}

const Section: React.FC<IProps> = ({ item }) => {

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const optionsRef = useRef<HTMLDivElement | null>(null);
   const [isOptionsVisible, setIsOptionsVisible] = useState(false);

   const onChangeHandler = () => {
      dispatch(setNewSection(item));
      navigate('/create');
   } 

   const onRemoveHandler = () => {
      dispatch(removeDoneSection(item.id));
      setIsOptionsVisible(false);
      window.location.reload();
   }
   
   const onPlayHandler = () => {
      dispatch(setCurrentSection(item));
   }

   useEffect(() => {
      const toggleIsOpened = (event: MouseEvent) => {
         if (optionsRef.current && !event.composedPath().includes(optionsRef.current)) {
            setIsOptionsVisible(false);
         }
      }

      document.addEventListener('click', toggleIsOpened);

      return () => {
         document.removeEventListener('click', toggleIsOpened);
      }

   }, [isOptionsVisible])

   return (
      <div className="section">
         <div className="functions" ref={optionsRef}>
            <button className={isOptionsVisible ? 'visible options' : 'options'} onClick={() => setIsOptionsVisible(!isOptionsVisible)}>
               <img src={more} alt="other-functions" />
            </button>
            {isOptionsVisible &&
               <div className="options-body">
                  <button className="change" onClick={onChangeHandler}><img src={pencil} alt="Change Icon" /> Редактировать</button>
                  <button className="remove" onClick={onRemoveHandler}><img src={trash} alt="Trash Icon" /> Удалить</button>
               </div>
            }
         </div>
         <div className="title">{item.name}</div>
         <div className="details">
            <ul>
               {item.questions.map((question, index) => {
                  return <li key={index}>{question.questionText}</li>
               })}
            </ul>
         </div>
         <NavLink to='quitz' onClick={() => onPlayHandler()} className="play">
            <img src={play} alt="play" />
         </NavLink>
      </div>
   );
}

export default Section;