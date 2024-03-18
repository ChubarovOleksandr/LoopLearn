/* eslint-disable react/prop-types */
import play from '../assets/img/play.png';
import '../scss/components/Index.scss'

const Section = ({ item }) => {

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
         <div className="play"><button><img src={play} alt="play" /></button></div>
      </div>
   );
}

export default Section;