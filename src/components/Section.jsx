/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import play from '../assets/img/play.png';
import '../scss/components/Index.scss'
import { addQuestions } from '../redux/slice/quitzSlice';
import { useDispatch } from 'react-redux';

const Section = ({ item }) => {

   const dispatch = useDispatch();

   const onPlayHandler = () => {
      dispatch(addQuestions(item));
   }

   return (
      <div className="section">
         <div className="title">{item.name}</div>
         <div className="details">
            <ul>
               {item.questions.map((question, index) => {
                  return <li key={index}>{question.question}</li>
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