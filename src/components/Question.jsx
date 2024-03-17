import { useEffect, useRef, useState } from "react";
import { changeSectionQuestion, removeSectionQuestion } from "../redux/slice/sectionsSlice";
import { useDispatch } from "react-redux";
import autosize from "autosize";

/* eslint-disable react/prop-types */
const Question = ({ item }) => {

   const [text, setText] = useState(item.question);
   const dispatch = useDispatch();
   const textareaRef = useRef();

   const changeText = (inputText) => {
      dispatch(changeSectionQuestion({ ...item, question: inputText }));
      setText(inputText);
   }

   const removeQuestion = () => {
      dispatch(removeSectionQuestion(item));
   }

   useEffect(()=>{
      autosize(textareaRef.current);
   }, [])

   return (
      <li>
         <textarea value={text} ref={textareaRef} rows={1} onChange={() => changeText(event.target.value)} />
         <button onClick={() => removeQuestion()}>-</button>
      </li>
   );
}

export default Question;