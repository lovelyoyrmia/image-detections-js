import React, { useState } from "react";

function DropFile() {
  const [highlight, setHighlight] = useState(false);

  const handleHighlight = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setHighlight(true);
  };
  const handleUnhighlight = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setHighlight(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let data = e.dataTransfer;
    let file = data.files;
    console.log(file);
  };

  return (
    <div>
      <div
        onDragEnter={handleHighlight}
        onDragOver={handleHighlight}
        onDragLeave={handleUnhighlight}
        onDrop={handleDrop}
      >
        <p>Drop File Here</p>
      </div>
    </div>
  );
}

export default DropFile;
