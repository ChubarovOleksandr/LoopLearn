import autosize from "autosize";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addQuestion } from "../../redux/slice/sectionsSlice";
import { useAppDispatch } from "../../utils/hooks";

const CreateSectionQuestion = () => {

   const dispatch = useAppDispatch();

   const textareaRef = useRef<HTMLTextAreaElement | null>(null);

   const onQuestionAdd = () => {
      if (textareaRef.current?.value){
         dispatch(addQuestion(textareaRef.current.value))
         textareaRef.current.value = '';
         autosize.update(textareaRef.current);
      } else {
         alert('Введите название задачи')
      }
   }

   useEffect(()=>{
      if (textareaRef.current) {
         autosize(textareaRef.current);
      }
   }, [textareaRef.current])

   return (
      <div className="form__part">
         <span>Добавьте вопросы</span>
         <div className="add-question">
            <textarea ref={textareaRef} rows={1}></textarea>
            <button type="button" onClick={onQuestionAdd}>+</button>
         </div>
      </div>
   );
}

export default CreateSectionQuestion;