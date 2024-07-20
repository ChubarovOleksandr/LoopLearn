import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IQuestion, ISection } from "../../components/dashboard/Dashboard";

interface QuitzState {
   currentSection: ISection | null,
   totalCounts: number,
   failedQuestion: IQuestion[],
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
      setCurrentSection(state, action: PayloadAction<ISection>){
         state.currentSection = action.payload;
      },
      removePassedQuestion(state, action: PayloadAction<{id: number}>) {
         if (state.currentSection) {
            state.currentSection.questions = state.currentSection.questions.filter(question => question.id !== action.payload.id);
         }
      },
      setTotalCounts(state, action: PayloadAction<number>) {
         state.totalCounts = action.payload;
      },
      leftQuestion(state) {
         if (state.currentSection) {
            const firstEl = state.currentSection.questions.shift();
            if (firstEl) {
               state.currentSection.questions.push(firstEl);
            }
         }
      },
      addFailedQuestion(state, action: PayloadAction<IQuestion>) {         
         if(!state.failedQuestion.some(question => question.id === action.payload.id)){
            state.failedQuestion.push(action.payload);
         }
      }
   }
})

export const { setCurrentSection, removePassedQuestion, setTotalCounts, leftQuestion, addFailedQuestion } = quitzSlice.actions;