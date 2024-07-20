import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDataFromLS } from "../../utils/LS";
import { IQuestion, ISection } from "../../components/dashboard/Dashboard";

const doneSections = getDataFromLS('sections');

interface newSection {
   name: string,
   questions: IQuestion[]
}

interface SectionState {
   doneSections: ISection[],
   newSection: newSection
}

const initialState: SectionState = {
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
      saveSection(state, action: PayloadAction<ISection>) {    
         state.doneSections.push(action.payload);
         state.newSection = {
            name: '',
            questions: [],
         }
      },
      setNewSection(state, action: PayloadAction<newSection>) {
         state.newSection = action.payload;
      },
      removeDoneSection(state, action: PayloadAction<string>) {         
         state.doneSections = state.doneSections.filter(section => section.id !== action.payload);
      },
      updateSection(state, action: PayloadAction<ISection>) {
         const sectionIndex = state.doneSections.findIndex(section => section.id === action.payload.id);
         if (sectionIndex !== -1) {
            state.doneSections[sectionIndex] = action.payload;
         }
      },
      clearNewSection(state) {
         state.newSection = {
            name: '',
            questions: []
         }
      }
   }
})

export const { setSectionName, addQuestion, changeQuestion, removeQuestion, setAnswer, removeAnswer, saveSection, setNewSection,
   removeDoneSection, updateSection, clearNewSection } = sectionSlice.actions;