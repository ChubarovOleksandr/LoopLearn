import autosize from 'autosize';
import '../scss/components/CreateSection.scss'
import { useEffect, useRef } from 'react';
import Question from './Question';
import { useDispatch, useSelector } from 'react-redux';
import { addSection, removeSectionQuestion, saveSectionQuestion, autoSaveText } from '../redux/slice/sectionsSlice';
import { useNavigate } from 'react-router-dom';

const ChangeSection = () => {

   const id = useSelector(state => state.section.changingSectionId);
   console.log(id);

   const textareaRef = useRef();
   const nameRef = useRef();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const initSectionTitle = useSelector(state => state.section.autoSavedName);
   const initSectionQuestion = useSelector(state => state.section.autoSavedQuestion);
   const item = useSelector(state => state.section.creatingSectionQuestion);

   const saveSection = () => {
      if (nameRef.current.value != '' && item.length != 0) {
         dispatch(addSection({ name: nameRef.current.value, item }));
         dispatch(autoSaveText({ autoSavedName: '', autoSavedQuestion: '' }));
         item.forEach(item => dispatch(removeSectionQuestion(item)));
         navigate('/');
      } else {
         alert('Пожалуйста введите название и хотя бы одну задачу');
      }
   }

   const addQuestion = () => {
      if (textareaRef.current.value != '') {
         dispatch(saveSectionQuestion({ question: textareaRef.current.value }));
         dispatch(autoSaveText({ autoSavedName: nameRef.current.value, autoSavedQuestion: '' }));
         autosize.update(textareaRef.current);
      } else {
         alert('Пожалуйста введите название и хотя бы одну задачу');
      }
   }

   const autoSave = () => {
      dispatch(autoSaveText({ autoSavedName: nameRef.current.value, autoSavedQuestion: textareaRef.current.value }));
   }

   useEffect(() => {
      autosize(textareaRef.current)
   }, []);


   return (
      <main className='createSection'>
         <div className="wrapper">
            <form onClick={(e) => e.preventDefault()}>
               <h1>Изменение раздела</h1>
               <div className="form__body">
                  <span className='dedicated'>Введите название</span>
                  <div className="name">
                     <input type="text" value={initSectionTitle} onChange={() => autoSave()} ref={nameRef} maxLength={40} />
                  </div>
                  <span>Добавьте вопросы</span>
                  <div className="question">
                     <textarea value={initSectionQuestion} onChange={() => autoSave()} rows={1} ref={textareaRef} />
                     <button onClick={() => addQuestion()}>+</button>
                  </div>
                  {item.length != 0 &&
                     <>
                        <span>Отредактируйте или добавьте ответ</span>
                        <ul className="question-list">
                        {item.map(item => <Question key={item.id} item={item} />)}
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