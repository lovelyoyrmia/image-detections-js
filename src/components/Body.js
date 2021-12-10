import React, { useState, useEffect } from "react";
import Models from "./Models";
import imageBaby from "../image/image.jpg";
import "./Body.css";
import DropFile from "./DropFile";

function Body() {
  const [file, setFile] = useState();
  const [image, setImage] = useState();
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
    const file = e.dataTransfer.files[0];
    setFile(file);
    setHighlight(false);
  };

  useEffect(() => {
    const getImage = () => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        setImage({
          url: img.src,
          width: img.width,
          height: img.height,
        });
      };
    };

    file && getImage();
  }, [file]);

  console.log(file);

  return (
    <div className="body">
      {image ? (
        <Models image={image} />
      ) : (
        <div>
          <DropFile
            highlight={highlight}
            handleHighlight={handleHighlight}
            handleUnhighlight={handleUnhighlight}
            handleDrop={handleDrop}
          />
          <div className="post_card">
            <div className="add_post">
              <img src={imageBaby} alt="avatar" className="avatar" />
              <div className="post_form">
                <input
                  type="text"
                  placeholder="What's on your mind ?"
                  className="post_input"
                />
                <label htmlFor="file">
                  <img
                    className="add_image"
                    src="https://cdn-icons-png.flaticon.com/512/685/685685.png"
                    alt="icon1"
                  />
                  <button>Send</button>
                </label>
                <input
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Body;
