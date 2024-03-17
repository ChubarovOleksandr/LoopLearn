import autosize from 'autosize';
import '../scss/components/CreateSection.scss'
import { useEffect, useRef } from 'react';
import Question from './Question';
import { useDispatch, useSelector } from 'react-redux';
import { addSection, removeSectionQuestion, saveSectionQuestion } from '../redux/slice/sectionsSlice';
import { useNavigate } from 'react-router-dom';

const CreateSection = () => {

   const textareaRef = useRef();
   const nameRef = useRef();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const questions = useSelector(state => state.section.creatingSectionQuestion);

   const saveSection = () => {
      if (nameRef.current.value != '' && questions.length != 0) {
         dispatch(addSection({ name: nameRef.current.value, questions }));
         questions.forEach(item => dispatch(removeSectionQuestion(item)));
         navigate('/');
      } else {
         alert('Пожалуйста введите название и хотя бы одну задачу');
      }
   }

   const addQuestion = () => {
      if (textareaRef.current.value != '') {
         dispatch(saveSectionQuestion({ name: nameRef.current.value, question: textareaRef.current.value }));
         textareaRef.current.value = '';
         autosize.update(textareaRef.current);
      } else {
         alert('Пожалуйста введите название и хотя бы одну задачу');
      }
   }

   useEffect(() => {
      autosize(textareaRef.current)
   }, []);


   return (
      <main className='createSection'>
         <div className="wrapper">
            <form onClick={(e) => e.preventDefault()}>
               <h1>Создание раздела</h1>
               <div className="form__body">
                  <span className='dedicated'>Введите название</span>
                  <div className="name">
                     <input type="text" ref={nameRef} maxLength={40} />
                  </div>
                  <span>Добавьте вопросы</span>
                  <div className="question">
                     <textarea rows={1} ref={textareaRef} />
                     <button onClick={() => addQuestion()}>+</button>
                  </div>
                  {questions.length != 0 &&
                     <ul className="question-list">
                        {questions.map(item => <Question key={item.id} item={item} />)}
                     </ul>
                  }
                  <button onClick={(() => saveSection())} className="save">Добавить раздел</button>
               </div>
            </form>
         </div>
      </main>
   );
}

export default CreateSection;