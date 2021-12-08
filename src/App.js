import { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";
import "./App.css";

function App() {
  const imgRef = useRef();
  const canvasRef = useRef();

  const handleImage = async () => {
    const detections = await faceapi
      .detectAllFaces(imgRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();

    canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(imgRef.current);
    faceapi.matchDimensions(canvasRef.current, {
      width: 940,
      height: 650,
    });
    const resized = faceapi.resizeResults(detections, {
      width: 940,
      height: 650,
    });
    console.log(detections);
    faceapi.draw.drawDetections(canvasRef.current, resized);
  };

  useEffect(() => {
    const loadModels = () => {
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
        faceapi.nets.faceExpressionNet.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      ])
        .then(handleImage)
        .catch((e) => console.log(e));
    };
    imgRef.current && loadModels();
  }, []);
  return (
    <div className="App">
      <img
        crossOrigin="anonymous"
        ref={imgRef}
        src={
          "https://images.pexels.com/photos/9811710/pexels-photo-9811710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
        alt="something"
        width="940"
        height="650"
      />
      <canvas ref={canvasRef} width="940" height="650" />
    </div>
  );
}

export default App;
