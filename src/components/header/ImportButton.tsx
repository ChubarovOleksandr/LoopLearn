import { useState } from "react";
import DropArea from "../portal/DropArea";
import { createPortal } from "react-dom";

const ImportButton = () => {
  const [showDropArea, setShowDropArea] = useState(false);

  return (
    <>
      <button className="header-button" onClick={() => setShowDropArea(true)}>
        Загрузить
      </button>
      {showDropArea &&
        createPortal(<DropArea onClose={setShowDropArea} />, document.body)}
    </>
  );
};

export default ImportButton;
