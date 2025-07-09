import autosize from 'autosize';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@utils/hooks';

import { RootState } from 'src/redux';
import { addQuestion, toggleShowingAnswerByDefault } from 'src/redux/slice/sectionsSlice';

const CreateSectionQuestion = () => {
  const dispatch = useAppDispatch();

  const isAnswerShowByDefault = useSelector(
    (state: RootState) => state.section.newSection.showAnswerByDefault,
  );

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const onQuestionAdd = () => {
    if (textareaRef.current?.value) {
      dispatch(addQuestion(textareaRef.current.value));
      textareaRef.current.value = '';
      autosize.update(textareaRef.current);
    } else {
      alert('Введите название задачи');
    }
  };

  const onToggleShowingAnswerByDefault = () => {
    dispatch(toggleShowingAnswerByDefault());
  };

  useEffect(() => {
    if (textareaRef.current) {
      autosize(textareaRef.current);
    }
  }, []);

  console.log(111);

  return (
    <div className="form__part">
      <span>Добавьте вопросы</span>
      <div className="add-question">
        <textarea ref={textareaRef} rows={1}></textarea>
        <button type="button" title="Создать вопрос" onClick={onQuestionAdd}>
          +
        </button>
        <input
          id="toggle-show"
          type="checkbox"
          checked={isAnswerShowByDefault}
          onChange={onToggleShowingAnswerByDefault}
        />
        <label
          title="Отвечает за авт. наличие полей для ответа при создании"
          htmlFor="toggle-show"
        ></label>
      </div>
    </div>
  );
};

export default CreateSectionQuestion;
