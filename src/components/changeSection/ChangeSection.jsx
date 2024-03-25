import autosize from 'autosize';
import '../../scss/components/CreateSection.scss'
import { useEffect, useRef, useState } from 'react';
import Question from '../common/Question';
import { useDispatch, useSelector } from 'react-redux';
import { addSection, removeSection, removeSectionQuestion, saveSectionQuestion, setChangingSectionId } from '../../redux/slice/sectionsSlice';
import { Navigate, useNavigate } from 'react-router-dom';

const ChangeSection = () => {

   const id = useSelector(state => state.section.changingSectionId);
   const item = useSelector(state => state.section.doneSections[id]);

   const textareaRef = useRef();
   const nameRef = useRef();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [name, setName] = useState(item.name);

   const saveSection = () => {
      if (nameRef.current.value != '' && item.length != 0) {
         item.questions.forEach(item => dispatch(removeSectionQuestion(item)));
         dispatch(addSection({ name: nameRef.current.value, questions: item.questions }));
         dispatch(removeSection({id: item.id}))
         dispatch(setChangingSectionId({id: item.id}))
         navigate('/');
      } else {
         alert('Пожалуйста введите название и хотя бы одну задачу');
      }
   }

   const addQuestion = () => {
      if (textareaRef.current.value != '') {
         dispatch(saveSectionQuestion({ question: textareaRef.current.value }));
         autosize.update(textareaRef.current);
      } else {
         alert('Пожалуйста введите название и хотя бы одну задачу');
      }
   }

   useEffect(() => {
      autosize(textareaRef.current)
   }, []);

   if(item === undefined) {
      return <Navigate to='/' />
   }


   return (
      <main className='createSection'>
         <div className="wrapper">
            <form onClick={(e) => e.preventDefault()}>
               <h1>Изменение раздела</h1>
               <div className="form__body">
                  <span className='dedicated'>Введите название</span>
                  <div className="name">
                     <input type="text" value={name} onChange={(e)=> setName(e.target.value)} ref={nameRef} maxLength={40} />
                  </div>
                  <span>Добавьте вопросы</span>
                  <div className="question">
                     <textarea rows={1} ref={textareaRef} />
                     <button onClick={() => addQuestion()}>+</button>
                  </div>
                  {item.questions.length != 0 &&
                     <>
                        <span>Отредактируйте или добавьте ответ</span>
                        <ul className="question-list">
                        {item.questions.map(item => <Question key={item.id} item={item} />)}
                        </ul>
                     </>
                  }
                  <button onClick={(() => saveSection())} className="save">Добавить раздел</button>
               </div>
            </form>
         </div>
      </main>
   );
}

export default ChangeSection;