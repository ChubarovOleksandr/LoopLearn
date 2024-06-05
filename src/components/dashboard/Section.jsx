/* eslint-disable react/prop-types */
import play from '../../assets/img/play.png';
import '../../scss/pages/Dashboard.scss'
import more from '../../assets/img/ellipsis.png'
import pencil from '../../assets/img/pencil.png'
import trash from '../../assets/img/trash-bin.png'

const Section = ({ item }) => {

   // const dispatch = useDispatch();
   // const optionsRef = useRef();
   // const [userComfirm, setUserConfirm] = useState(false);
   // const creatingSectionQuestion = useSelector(state => state.section.creatingSectionQuestion);
   // const creatingSectionName = useSelector(state => state.section.autoSavedName);
   // const [isOptionsVisible, setIsOptionsVisible] = useState(false);

   // const onPlayHandler = () => {
   //    dispatch(addQuestions(item));
   // }

   // const onRemoveHandler = () => {
   // }

   // const onChangeHandler = () => {
   //    if (creatingSectionQuestion.length != 0 || creatingSectionName != '') {
   //       setUserConfirm(confirm('Вы начали создавать один отдел, но ещё не сохранили его, недобавленный отдел будет не сохранен. Вы уверенны?'))
   //    } else {
   //       setUserConfirm(true);
   //    }
   // }
   
   // useEffect(() => {
   //    const toggleIsOpened = event => {
   //       if (!event.composedPath().includes(optionsRef.current)) {
   //          setIsOptionsVisible(false);
   //       }
   //    }
      
   //    document.addEventListener('click', toggleIsOpened);
      
   //    return () => {
   //       document.removeEventListener('click', toggleIsOpened);
   //    }
      
   // }, [isOptionsVisible])
   
   // if(userComfirm){
   //    dispatch(setChangingSectionId({id: item.id}))
   //    console.log(item.id);
   //    return <Navigate to='change' />
   // }


   return (
      <div className="section">
         {/* <div className="functions" ref={optionsRef}>
            <button className={isOptionsVisible ? 'visible options' : 'options'} onClick={() => setIsOptionsVisible(!isOptionsVisible)}><img src={more} alt="other-functions" /></button>
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
                  return <li key={index}>{question.question}</li>
               })}
            </ul>
         </div>
         <NavLink to='quitz' onClick={() => onPlayHandler()} className="play">
            <img src={play} alt="play" />
         </NavLink> */}
      </div>
   );
}

export default Section;