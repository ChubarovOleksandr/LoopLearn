import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   doneSections: [],
   creatingSectionQuestion: [],
   autoSavedName: '',
   autoSavedQuestion: '',
};

export const sectionSlice = createSlice({
   name: 'sectionSlice',
   initialState,
   reducers: {
      saveSectionQuestion(state, action) {
         state.creatingSectionQuestion.push({ ...action.payload, id: state.creatingSectionQuestion.length, answer: '' });
      },
      changeSectionQuestion(state, action) {
         const updatedState = state.creatingSectionQuestion.map(item => {
            if (item.id === action.payload.id) {
               return { ...item, question: action.payload.question }
            } else {
               return item;
            }
         })
         state.creatingSectionQuestion = [...updatedState];
      },
      removeSectionQuestion(state, action) {
         state.creatingSectionQuestion.map((item, index) => {
            if (item.id === action.payload.id) {
               state.creatingSectionQuestion.splice(index, 1);
            }
         })
      },
      autoSaveText(state, action) {
         const { autoSavedName, autoSavedQuestion } = action.payload;
         state.autoSavedName = autoSavedName;
         state.autoSavedQuestion = autoSavedQuestion;
      },
      addAnswer(state, action) {
         const updatedState = state.creatingSectionQuestion.map(item => {
            if (item.id === action.payload.id) {
               return { ...item, answer: action.payload.answer }
            } else {
               return item;
            }
         })
         state.creatingSectionQuestion = [...updatedState];
      },
      addSection(state, action) {
         state.doneSections.push({ ...action.payload, id: state.doneSections.length });
      },
   }
})

export const { addSection, saveSectionQuestion, changeSectionQuestion, removeSectionQuestion, autoSaveText, addAnswer } = sectionSlice.actions;