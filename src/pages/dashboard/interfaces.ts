export interface QuestionInterface {
  answer?: string;
  id: number;
  questionText: string;
}

export interface SectionInterface {
  id?: string;
  name: string;
  questions: QuestionInterface[];
  showAnswerByDefault: boolean;
}