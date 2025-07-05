import React from 'react';
import { QuestionInterface } from '../pages/dashboard/interfaces';

interface CountPercentPropsInterface {
  totalCounts: number;
  failedQuestion: QuestionInterface[];
  currVal: number;
  setCurrVal: React.Dispatch<React.SetStateAction<number>>;
  time: number;
}

export const countPercent = ({
  totalCounts,
  failedQuestion,
  currVal,
  setCurrVal,
  time,
}: CountPercentPropsInterface) => {
  const val = Math.round((1 - failedQuestion.length / totalCounts) * 100);

  if (currVal !== val) {
    setTimeout(setCurrVal, time, currVal + 1);
  }
};
