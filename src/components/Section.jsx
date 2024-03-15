import play from '../assets/img/play.png';
import '../scss/components/Main.scss'

const Section = () => {
   return (
      <div className="section">
         <div className="title">IT</div>
         <div className="details">
            <ul>
               <li>Почему так</li>
               <li>а никак</li>
               <li>иначе?</li>
               <li>может,</li>
               <li>это не спроста</li>
            </ul>
         </div>
         <div className="play"><button><img src={play} alt="play" /></button></div>
      </div>
   );
}

export default Section;