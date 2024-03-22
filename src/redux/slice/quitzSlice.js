import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   items: {},
   totalCounts: 0,
   failedQuestion: [],
};

export const quitzSlice = createSlice({
   name: 'quitzSlice',
   initialState,
   reducers: {
      addQuestions(state, action) {
         state.items = action.payload;
         state.totalCounts = action.payload.questions.length;
         state.failedQuestion = [];
      },
      removeQuestion(state, action) {  // remove questioN from questionS
         state.items.questions = state.items.questions.filter(item => item.id !== action.payload);
      },
      leftQuestion(state) {
         state.items.questions.push(state.items.questions.splice(0, 1)[0]);
      },
      addFailedQuestion(state, action) {
         const isExist = state.failedQuestion.some(item => item.id === action.payload.id);
         if(!isExist){
            state.failedQuestion.push(action.payload)
         }
      },
   }
})

export const { addQuestions, removeQuestion, leftQuestion, addFailedQuestion } = quitzSlice.actions;