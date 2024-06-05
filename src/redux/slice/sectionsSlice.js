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
         state.newSection.questions.push({questionText: action.payload, id: state.newSection.questions.length})
      },
      changeQuestion(state, action) {
         state.newSection.questions.map(question => {
            if(question.id === action.payload.id){
               question.questionText = action.payload.questionText;
            }
         })
      }
   }
})

export const { setSectionName, addQuestion, changeQuestion } = sectionSlice.actions;