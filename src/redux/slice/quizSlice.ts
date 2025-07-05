import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuestionInterface, SectionInterface } from '../../pages/dashboard/interfaces';

interface quizState {
  originSection: SectionInterface | null;
  modifiedSection: SectionInterface | null;
  failedQuestion: QuestionInterface[];
  totalCounts: number,
  complete: boolean;
  flipped: boolean;
  activeIndex: number;
  isChecking: boolean;
}

const initialState: quizState = {
  originSection: null,
  modifiedSection: null,
  failedQuestion: [],
  totalCounts: 0,
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
    changeFlipped(state) {
      state.flipped = !state.flipped;
    },
    setOriginSection(state, action) {
      state.originSection = action.payload;
      state.modifiedSection = action.payload;
    },
    setModifiedSection(state, action: PayloadAction<SectionInterface>) {
      const shuffledQuestions = [...action.payload.questions].sort(() => Math.random() - 0.5);
      state.modifiedSection = { ...action.payload, questions: shuffledQuestions };
    },
    removePassedQuestion(state, action: PayloadAction<{ id: number }>) {
      if (state.modifiedSection && state.modifiedSection.questions.length - 1 > 0) {
        state.modifiedSection.questions = state.modifiedSection.questions.filter(
          (question) => question.id !== action.payload.id
        );
      } else {
        state.complete = true;
      }
    },
    leftQuestion(state) {
      if (state.modifiedSection) {
        const firstEl = state.modifiedSection.questions.shift();
        if (firstEl) {
          state.modifiedSection.questions.push(firstEl);
        }
      }
    },
    addFailedQuestion(state, action: PayloadAction<QuestionInterface>) {
      if (!state.failedQuestion.some((question) => question.id === action.payload.id)) {
        state.failedQuestion.push(action.payload);
      }
    },
    setTotalCounts(state, action: PayloadAction<number>) {
      state.totalCounts = action.payload;
    },
    resetState(state) {
      state.modifiedSection = null;
      state.failedQuestion = [];
      state.totalCounts = 0;
      state.complete = false;
      state.flipped = false;
      state.activeIndex = 1;
      state.isChecking = false;
    }
  },
});

export const {
  setModifiedSection,
  removePassedQuestion,
  leftQuestion,
  setOriginSection,
  addFailedQuestion,
  changeFlipped,
  changeIsChecking,
  setTotalCounts,
  resetState
} = quizSlice.actions;
