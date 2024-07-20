import { createSlice } from "@reduxjs/toolkit";

interface QuitzState {
   currentSection: any,
   totalCounts: number,
   failedQuestion: any
}

const initialState: QuitzState = {
   currentSection: null,
   totalCounts: 0,
   failedQuestion: [],
};

export const quitzSlice = createSlice({
   name: 'quitzSlice',
   initialState,
   reducers: {
      setCurrentSection(state, action){
         console.log(action.payload);
         
         state.currentSection = action.payload;
      },
      removePassedQuestion(state, action) {
         state.currentSection.questions = state.currentSection.questions.filter(question => question.id !== action.payload.id);
      },
      setTotalCounts(state, action) {
         state.totalCounts = action.payload;
      },
      leftQuestion(state, action) {
         const firstEl = state.currentSection.questions.shift();
         state.currentSection.questions.push(firstEl);
      },
      addFailedQuestion(state, action) {
         if(!state.failedQuestion.some(question => question.id === action.payload.id)){
            state.failedQuestion.push(action.payload);
         }
      }
   }
})

export const { setCurrentSection, removePassedQuestion, setTotalCounts, leftQuestion, addFailedQuestion } = quitzSlice.actions;