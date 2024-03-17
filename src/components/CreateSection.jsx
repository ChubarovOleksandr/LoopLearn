import autosize from 'autosize';
import '../scss/components/CreateSection.scss'
import { useEffect, useRef } from 'react';

const CreateSection = () => {

   const textareaRef = useRef();

   useEffect(()=>{
      autosize(textareaRef.current)
   }, [])

   return (
      <main className='createSection'>
         <div className="wrapper">
            <form>
               <h1>Создание раздела</h1>
               <div className="form__body">
                  <span className='dedicated'>Введите название</span>
                  <div className="name">
                     <input type="text" maxLength={40} />
                  </div>
                  <span>Добавьте вопросы</span>
                  <div className="question">
                     <textarea rows={1} ref={textareaRef}/>
                     <button>+</button>
                  </div>
                  <button className="save">Добавить раздел</button>
               </div>
            </form>
         </div>
      </main>
   );
}

export default CreateSection;