import React from "react";
import "./DropFile.css";

function DropFile({
  highlight,
  handleHighlight,
  handleUnhighlight,
  handleDrop,
}) {
  return (
    <div
      className={highlight ? "drophighlight" : "dropfile-con"}
      onDragEnter={handleHighlight}
      onDragOver={handleHighlight}
      onDragLeave={handleUnhighlight}
      onDrop={handleDrop}
    >
      <p className="drop-title">Drop File Here</p>
      <div className="drop-icon">
        <img
          src="https://image.flaticon.com/icons/png/128/959/959143.png"
          alt="dropfile"
          style={{ width: "4rem" }}
        />
      </div>
      <p className="drop-subtitle">
        Or <span>Browse the image bellow</span>
      </p>
    </div>
  );
}

export default DropFile;
