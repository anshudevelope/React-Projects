import { useRef, useState } from 'react'
import './App.css'

function App() {

  const [image, setImage] = useState([]);
  const [videourl, setVideourl] = useState(null);
  const canvasRef = useRef();

  const handleImgUpload = (e) =>{
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImage(imageUrls);
    setVideourl(null);
  }

  const drawnAnimatedImage = (ctx, img, duration = 2000) => {
    return new Promise((resolve) => {
      const start = performance.now();
      const canvas = ctx.canvas;
      const zoomFactor = 1.2;

      function animateTime(time){
        const elapsed = time - start;
        const progress = Math.min(elapsed/duration, 1);
        const scale = 1 + (zoomFactor - 1) * progress;
        const imgWidth = img.width * scale;
        const imgHight = img.height * scale;
        const x = (canvas.width - imgWidth)/2;
        const y = (canvas.height - imgHight)/2;

        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.drawImage(img,x,y, imgWidth, imgHight);

        if(progress < 1){
          requestAnimationFrame(animateTime);
        }else{
          setTimeout(resolve, 300);
        }
      }
      requestAnimationFrame(animateTime);
    }) 
  }

  const genVideo = async () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = 640;
    const height = 480;
    canvas.width = width;
    canvas.height = height;

    const stream = canvas.captureStream(30);
    const recorder = new MediaRecorder(stream);
    const chunks = [];

    recorder.ondataavailable = (e)=>{
      if (e.data.size > 0) chunks.push(e.data);
    }

    recorder.onstop = () => {
      const blob = new Blob(chunks, {type: "video/webm"});
      const url = URL.createObjectURL(blob);
      setVideourl(url);
    }

    recorder.start();

    for (let i = 0; i < image.length; i++) {
      await new Promise((resolve) => {
        const img = new Image();
        img.src = image[i];
        img.onload = async () => {
          await drawnAnimatedImage(ctx, img, 2000);
          resolve();
        }
      })
      
    }

    setTimeout(() => recorder.stop(), image.length * 2000 + 1000);

  }


  return (
    <div className='app-container'>
      <h1 className='title'>Image to Video Generator</h1>
      <input 
      type="file" 
      multiple accept='image/*' 
      className='upload-input' 
      onChange={handleImgUpload} />

      {image.length > 0 && (
        <>
        <h3 className='preview-title'>Preview Images</h3>
        <div className='preview-container'>
        {image.map((img, index) => (
          <img src={img} key={index} className='preview-img' />
        ))}
        </div>

        <button className='generate-btn' onClick={genVideo}>Generate Video</button>
        </>
      )}

      <canvas ref={canvasRef} style={{display: 'none'}} ></canvas>

      {videourl && (
        <div className='video-section'>
          <h3>Your Video is here...</h3>
          <video src={videourl} controls className='video-player'></video><br/>
          <a href={videourl} download="animated.webm" className='download-btn'>Download Video</a>
        </div>
      )}
    </div>

  )
}

export default App
