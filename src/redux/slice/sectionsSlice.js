import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   doneSections: [],
   creatingSectionQuestion: [],
};

export const sectionSlice = createSlice({
   name: 'sectionSlice',
   initialState,
   reducers: {
      saveSectionQuestion(state, action) {
         state.creatingSectionQuestion.push({ ...action.payload, id: state.creatingSectionQuestion.length });
      },
      changeSectionQuestion(state, action) {
         state.creatingSectionQuestion.map(item => {
            if (item.id === action.payload.id) {
               return { ...item, question: action.payload.question }
            } else {
               return item;
            }
         })
      },
      removeSectionQuestion(state, action) {
         state.creatingSectionQuestion.map((item, index) => {
            if (item.id === action.payload.id) {
               state.creatingSectionQuestion.splice(index, 1);
            }
         })
      },
      addSection(state, action) {
         state.doneSections.push({ ...action.payload, id: state.doneSections.length });
      },
   }
})

export const { addSection, saveSectionQuestion, changeSectionQuestion, removeSectionQuestion } = sectionSlice.actions;