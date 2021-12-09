import React, { useState, useEffect } from "react";
import Models from "./Models";
import "./Body.css";

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

  return (
    <div className="body">
      {image ? (
        <Models image={image} />
      ) : (
        <div className="post_card">
          <div className="add_post">
            <img
              src="https://images.pexels.com/photos/9811710/pexels-photo-9811710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="someom"
              className="avatar"
            />
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
