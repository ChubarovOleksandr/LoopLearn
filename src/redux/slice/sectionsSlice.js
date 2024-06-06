import { createSlice } from "@reduxjs/toolkit";
import { getDataFromLS } from "../../utils/LS";

const doneSections = getDataFromLS('sections');

const initialState = {
   doneSections,
   newSection: {
      name: '',
      questions: [],
   }
};

export const sectionSlice = createSlice({
   name: 'sectionSlice',
   initialState,
   reducers: {
      setSectionName(state, action) {
         state.newSection.name = action.payload;
      },
      addQuestion(state, action) {
         state.newSection.questions.push({ questionText: action.payload, id: state.newSection.questions.length })
      },
      changeQuestion(state, action) {
         state.newSection.questions.map(question => {
            if (question.id === action.payload.id) {
               question.questionText = action.payload.questionText;
            }
         })
      },
      removeQuestion(state, action) {
         state.newSection.questions = state.newSection.questions.filter(question => question.id !== action.payload.id);
      },
      setAnswer(state, action) {
         state.newSection.questions.map(question => {
            if(question.id === action.payload.id) {
               question.answer = action.payload.answer;
            }
         })
      },
      removeAnswer(state, action) {
         state.newSection.questions.forEach(question => {
            if (question.id === action.payload.id) {
               delete question.answer;
            }
         });
      }
   }
})

export const { setSectionName, addQuestion, changeQuestion, removeQuestion, setAnswer, removeAnswer } = sectionSlice.actions;