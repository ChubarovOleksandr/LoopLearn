import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDataFromLS } from "../../utils/LS";
import { QuestionInterface, SectionInterface } from '../../pages/dashboard/interfaces';

const doneSections = getDataFromLS('sections');

interface newSection {
   name: string,
   questions: QuestionInterface[],
   showAnswerByDefault: boolean,
}

interface SectionState {
   doneSections: SectionInterface[],
   newSection: newSection
}

const initialState: SectionState = {
   doneSections,
   newSection: {
      name: '',
      questions: [],
      showAnswerByDefault: true,
   }
};

export const sectionSlice = createSlice({
   name: 'sectionSlice',
   initialState,
   reducers: {
      setSectionName(state, action: PayloadAction<string>) {
         state.newSection.name = action.payload;
      },
      addQuestion(state, action: PayloadAction<string>) {         
         state.newSection.questions.unshift({ questionText: action.payload, id: state.newSection.questions.length })
      },
      changeQuestion(state, action) {
         state.newSection.questions.map(question => {
            if (question.id === action.payload.id) {
               question.questionText = action.payload.questionText;
            }
         })
      },
      removeQuestion(state, action: PayloadAction<{id: number}>) {         
         state.newSection.questions = state.newSection.questions.filter(question => question.id !== action.payload.id);
      },
      setAnswer(state, action: PayloadAction<{id: number, answer: string}>) {         
         state.newSection.questions.map(question => {
            if (question.id === action.payload.id) {
               question.answer = action.payload.answer;
            }
         })
      },
      removeAnswer(state, action: PayloadAction<{id: number}>) {
         state.newSection.questions.forEach(question => {
            if (question.id === action.payload.id) {
               delete question.answer;
            }
         });
      },
      saveSection(state, action: PayloadAction<SectionInterface>) {    
         state.doneSections.push(action.payload);
         state.newSection = {
           name: "",
           questions: [],
           showAnswerByDefault: true,
         };
      },
      setNewSection(state, action: PayloadAction<newSection>) {
         state.newSection = action.payload;
      },
      removeDoneSection(state, action: PayloadAction<string>) {         
         state.doneSections = state.doneSections.filter(section => section.id !== action.payload);
      },
      updateSection(state, action: PayloadAction<SectionInterface>) {
         const sectionIndex = state.doneSections.findIndex(section => section.id === action.payload.id);
         if (sectionIndex !== -1) {
            state.doneSections[sectionIndex] = action.payload;
         }
      },
      clearNewSection(state) {
         state.newSection = {
           name: "",
           questions: [],
           showAnswerByDefault: true,
         };
      },
      toggleShowingAnswerByDefault(state) {
        state.newSection.showAnswerByDefault = !state.newSection.showAnswerByDefault; 
      }

   }
})

export const {
  setSectionName,
  addQuestion,
  changeQuestion,
  removeQuestion,
  setAnswer,
  removeAnswer,
  saveSection,
  setNewSection,
  removeDoneSection,
  updateSection,
  clearNewSection,
  toggleShowingAnswerByDefault,
} = sectionSlice.actions;