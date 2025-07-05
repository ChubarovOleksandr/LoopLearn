import { useState } from 'react';
import { createPortal } from 'react-dom';
import DropArea from '../portal/DropArea';

const ImportButton = () => {
  const [showDropArea, setShowDropArea] = useState(false);

  return (
    <>
      <button className="header-button" onClick={() => setShowDropArea(true)}>
        Загрузить
      </button>
      {showDropArea && createPortal(<DropArea onClose={setShowDropArea} />, document.body)}
    </>
  );
};

export default ImportButton;
