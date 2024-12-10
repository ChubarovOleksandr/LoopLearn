import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IQuestion, ISection } from "../../components/dashboard/Dashboard";

interface quizState {
  currentSection: ISection | null;
  failedQuestion: IQuestion[];
  complete: boolean;
  flipped: boolean;
  activeIndex: number;
  isChecking: boolean;
}

const initialState: quizState = {
  currentSection: null,
  failedQuestion: [],
  complete: false,
  flipped: false,
  activeIndex: 1,
  isChecking: false,
};

export const quizSlice = createSlice({
  name: "quizSlice",
  initialState,
  reducers: {
    changeIsChecking(state, action) {
      state.isChecking = action.payload;
    },
    setComplete(state) {
      state.complete = !state.complete;
    },
    changeFlipped(state) {
      state.flipped = !state.flipped;
    },
    setCurrentSection(state, action: PayloadAction<ISection>) {
      const shuffledQuestions = [...action.payload.questions].sort(() => Math.random() - 0.5);
      state.currentSection = { ...action.payload, questions: shuffledQuestions };
    },
    removePassedQuestion(state, action: PayloadAction<{ id: number }>) {
      if (state.currentSection && state.currentSection.questions.length - 1 > 0) {
        state.currentSection.questions = state.currentSection.questions.filter(
          (question) => question.id !== action.payload.id
        );
      } else {
        state.complete = true;
      }
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
      if (!state.failedQuestion.some((question) => question.id === action.payload.id)) {
        state.failedQuestion.push(action.payload);
      }
    },
  },
});

export const {
  setCurrentSection,
  removePassedQuestion,
  leftQuestion,
  addFailedQuestion,
  setComplete,
  changeFlipped,
  changeIsChecking,
} = quizSlice.actions;
