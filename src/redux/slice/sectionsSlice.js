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
            if (question.id === action.payload.id) {
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
      },
      saveSection(state, action) {
         const section = state.newSection;
         state.doneSections.push({ ...section, id: state.doneSections.length });
         state.newSection = {
            name: '',
            questions: [],
         }
      },
      setNewSection(state, action) {
         state.newSection = action.payload;
      },
      removeDoneSection(state, action) {
         state.doneSections = state.doneSections.filter(section => section.id !== action.payload);
      }
   }
})

export const { setSectionName, addQuestion, changeQuestion, removeQuestion, setAnswer, removeAnswer, saveSection, setNewSection,
   removeDoneSection } = sectionSlice.actions;