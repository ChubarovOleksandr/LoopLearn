import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { setSelectedMode } from "../../redux/slice/globalSlice";

const SelectMode = () => {
  const dispatch = useDispatch();

  const selectedMode = useSelector((state: RootState) => state.global.selectedMode);

  const onChangeSelectedMode = (newMode: string) => {
    dispatch(setSelectedMode(newMode));
  };

  const modesArray = [
    { value: "default", label: "Обычный" },
    { value: "reverse", label: "Обратный" },
    { value: "input", label: "Ввести ответ" },
  ];

  return (
    <div className="select-mode">
      <span>Выбранный режим:</span>
      <div className="items">
        {modesArray.map((modeObj) => (
          <button
            key={modeObj.value}
            className={selectedMode == modeObj.value ? "selected" : ""}
            onClick={() => onChangeSelectedMode(modeObj.value)}
          >
            {modeObj.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectMode;
