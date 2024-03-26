import { createSlice } from "@reduxjs/toolkit";
import { getDataFromLS } from "../../utils/LS";

const doneSections = getDataFromLS('sections');

const initialState = {
   doneSections,
   creatingSectionQuestion: [],
   changingSectionId: null,
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
         state.changingSection = [];
         state.autoSavedName = '';
         state.autoSavedQuestion = '';
         state.creatingSectionQuestion = [];
      },
      removeSection(state, action) {
         state.doneSections.map((item, index) => {
            if (item.id === action.payload.id) {
               state.doneSections.splice(index, 1);
            }
         })
         console.log(JSON.parse(JSON.stringify(state.doneSections)));
      },
      setChangingSectionId(state, action) {
         state.changingSectionId = action.payload.id;
      },
   }
})

export const { addSection, saveSectionQuestion, changeSectionQuestion, removeSectionQuestion,
   autoSaveText, addAnswer, removeSection, setChangingSectionId } = sectionSlice.actions;