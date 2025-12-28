import { useRef, useState } from "react";
import "./App.css";

const CANVAS_WIDTH = 1280;
const CANVAS_HEIGHT = 720;

function App() {
  const [images, setImages] = useState([]);
  const [videoUrl, setVideoUrl] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(2000);
  const [bgColor, setBgColor] = useState("#000000");

  const canvasRef = useRef();

  // Upload images
  const handleImgUpload = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...urls]);
  };

  // Remove image
  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  // Draw image inside fixed canvas (no overflow)
  const drawImageContained = (ctx, img, duration) => {
    return new Promise((resolve) => {
      const start = performance.now();
      const canvas = ctx.canvas;
      const maxZoom = 1.08;

      const scaleToFit = Math.min(
        canvas.width / img.width,
        canvas.height / img.height,
        1
      );

      function animate(time) {
        const p = Math.min((time - start) / duration, 1);
        const zoom = 1 + (maxZoom - 1) * p;
        const scale = scaleToFit * zoom;

        const w = img.width * scale;
        const h = img.height * scale;

        const x = (canvas.width - w) / 2;
        const y = (canvas.height - h) / 2;

        ctx.globalAlpha = 1;
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.globalAlpha = Math.min(p * 2, 1);
        ctx.drawImage(img, x, y, w, h);

        if (p < 1) {
          requestAnimationFrame(animate);
        } else {
          ctx.globalAlpha = 1;
          resolve();
        }
      }

      requestAnimationFrame(animate);
    });
  };

  const genVideo = async () => {
    setIsGenerating(true);
    setProgress(0);
    setVideoUrl(null);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    const stream = canvas.captureStream(30);
    const recorder = new MediaRecorder(stream);
    const chunks = [];

    recorder.ondataavailable = (e) => e.data.size && chunks.push(e.data);
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      setVideoUrl(URL.createObjectURL(blob));
      setIsGenerating(false);
    };

    recorder.start();

    for (let i = 0; i < images.length; i++) {
      await new Promise((resolve) => {
        const img = new Image();
        img.src = images[i];
        img.onload = async () => {
          await drawImageContained(ctx, img, duration);
          setProgress(Math.round(((i + 1) / images.length) * 100));
          resolve();
        };
      });
    }

    recorder.stop();
  };

  return (
    <div className="app-container">
      <h1>Image to Video Generator</h1>

      <input type="file" multiple accept="image/*" onChange={handleImgUpload} />

      {/* Image Preview */}
      {images.length > 0 && (
        <div className="preview-container">
          {images.map((img, i) => (
            <div key={i} className="preview-box">
              <img src={img} alt="" />
              <button onClick={() => removeImage(i)}>✕</button>
            </div>
          ))}
        </div>
      )}

      {images.length > 0 && (
        <>
          <div className="controls">
            <label>
              Duration (ms)
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(+e.target.value)}
              />
            </label>

            <label>
              Background
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
              />
            </label>
          </div>

          <button onClick={genVideo} disabled={isGenerating}>
            {isGenerating ? "Generating..." : "Generate Video"}
          </button>
        </>
      )}

      {/* Progress */}
      {isGenerating && (
        <div className="progress-box">
          <div className="progress-bar">
            <div style={{ width: `${progress}%` }}></div>
          </div>
          <p>{progress}% completed</p>
        </div>
      )}

      <canvas ref={canvasRef} style={{ display: "none" }} />

      {videoUrl && (
        <div className="video-section">
          <video src={videoUrl} controls />
          <a href={videoUrl} download="video.webm">
            Download Video
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
