import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { setSelectedMode } from '../../redux/slice/globalSlice';
import { useEffect, useRef, useState } from 'react';

const SelectMode = () => {
  const dispatch = useDispatch();
  const [selectedBgStyles, setSelectedBgStyles] = useState({ width: 0, left: 0 });
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const selectedMode = useSelector((state: RootState) => state.global.selectedMode);

  const onChangeSelectedMode = (newMode: string, index: number) => {
    dispatch(setSelectedMode(newMode));
    const button = buttonsRef.current[index];
    if (button) {
      const leftOffset = buttonsRef.current
        .slice(0, index)
        .reduce((acc, btn) => acc + (btn?.offsetWidth || 0), 0);
      setSelectedBgStyles({
        width: button.offsetWidth,
        left: leftOffset,
      });
    }
  };

  useEffect(() => {
    const selectedIndex = modesArray.findIndex(mode => mode.value === selectedMode);
    if (selectedIndex >= 0) {
      const button = buttonsRef.current[selectedIndex];
      if (button) {
        const leftOffset = buttonsRef.current
          .slice(0, selectedIndex)
          .reduce((acc, btn) => acc + (btn?.offsetWidth || 0), 0);
        setSelectedBgStyles({
          width: button.offsetWidth,
          left: leftOffset,
        });
      }
    }
  }, [selectedMode]);

  const modesArray = [
    { value: 'default', label: 'Обычный' },
    { value: 'reverse', label: 'Обратный' },
    { value: 'input', label: 'Ввести ответ' },
  ];

  return (
    <div className="select-mode">
      <span>Выбранный режим:</span>
      <div className="items">
        <div
          className="selected-item-bg"
          style={{
            width: selectedBgStyles.width,
            left: selectedBgStyles.left,
          }}
        ></div>
        {modesArray.map((modeObj, index) => (
          <button
            key={modeObj.value}
            ref={el => (buttonsRef.current[index] = el)}
            className={selectedMode == modeObj.value ? 'selected' : ''}
            onClick={() => onChangeSelectedMode(modeObj.value, index)}
          >
            {modeObj.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectMode;
