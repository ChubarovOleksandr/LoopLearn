import { IQuestion } from "../components/dashboard/Dashboard";

type Props = {
  totalCounts: number;
  failedQuestion: IQuestion[];
  currVal: number;
  setCurrVal: React.Dispatch<React.SetStateAction<number>>;
  time: number;
};

export const countPercent = ({ totalCounts, failedQuestion, currVal, setCurrVal, time }: Props) => {
  // console.log("Отвечено не правильно:", failedQuestion.length);
  // console.log("Общее кол-во вопросов:", totalCounts);

  const val = Math.round((1 - failedQuestion.length / totalCounts) * 100);  
  currVal !== val && setTimeout(setCurrVal, time, currVal + 1);
};