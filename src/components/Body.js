import React, { useState, useEffect } from "react";
import Models from "./Models";
import imageBaby from "../image/image.jpg";
import "./Body.css";
import DropFile from "./DropFile";

function Body() {
  const [file, setFile] = useState();
  const [image, setImage] = useState();

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
        <div className="post_card">
          <DropFile />
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
      )}
    </div>
  );
}

export default Body;
