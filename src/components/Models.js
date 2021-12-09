import React, { useState, useEffect, useRef } from "react";
import * as faceapi from "face-api.js";
import "./Models.css";

function Models({ image }) {
  const { url, width, height } = image;
  const [faces, setFaces] = useState([]);
  const [friends, setFriends] = useState([]);
  const imgRef = useRef();
  const canvasRef = useRef();

  const handleImage = async () => {
    const detections = await faceapi.detectAllFaces(
      imgRef.current,
      new faceapi.TinyFaceDetectorOptions()
    );
    // canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(imgRef.current);
    // faceapi.matchDimensions(canvasRef.current, { width, height });

    // const resized = faceapi.resizeResults(detections, {
    //   width,
    //   height,
    // });

    // faceapi.draw.drawDetections(canvasRef, resized);
    // faceapi.draw.drawFaceExpressions(canvasRef, resized);
    // faceapi.draw.drawContour(canvasRef, resized);
    setFaces(detections.map((d) => Object.values(d.box)));
  };

  const enter = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    faces.map((face) => ctx.strokeRect(...face));
  };

  useEffect(() => {
    const loadModels = () => {
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
        faceapi.nets.faceExpressionNet.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.ageGenderNet.loadFromUri("/models"),
      ])
        .then(handleImage)
        .catch((e) => console.log(e));
    };
    imgRef.current && loadModels();
  }, []);

  const addFriend = (e) => {
    setFriends((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(friends);

  return (
    <div className="container-img">
      <div className="left">
        <div className="left-side">
          <img crossOrigin="anonymous" ref={imgRef} src={url} alt="something" />
          <canvas
            onMouseEnter={enter}
            ref={canvasRef}
            width={width}
            height={height}
          />
          {faces.map((face, i) => (
            <input
              name={`input${i}`}
              style={{
                left: face[0] - face[2] + face[3] - 40,
                top: face[1] + 15,
              }}
              placeholder="Who's this ?"
              key={i}
              className="friend-input"
              onChange={addFriend}
            />
          ))}
        </div>
        <div className="face">
          <div className="face-found">
            {faces.length > 0
              ? faces.length === 1
                ? `Found ${faces.length} face !!`
                : `Found ${faces.length} faces !!`
              : "Face not found"}
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="right-title">Detect Faces</div>
        {friends && <div className="name">{Object.values(friends) + " "}</div>}
        <button className="right-button">Send</button>
      </div>
    </div>
  );
}

export default Models;
