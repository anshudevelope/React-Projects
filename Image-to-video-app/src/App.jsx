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

  const genVideo = () => {

  }


  return (
    <div className='app-container'>
      <h1>Image to Video Generator</h1>
      <input 
      type="file" 
      multiple accept='image/*' 
      className='upload-input' 
      onChange={handleImgUpload} />

      {image.length > 0 && (
        <>
        <h3>Preview Image</h3>
        <div>
        {image.map((img, index) => (
          <img src={img} key={index} />
        ))}
        </div>

        <button className='generate-btn' onClick={genVideo}>Generate Video</button>
        </>
      )}

      <canvas ref={canvasRef} style={{display: 'none'}} ></canvas>

      {videourl && (
        <div>
          <h3>Video Generated</h3>
          <video src={videourl} controls className='video-player'>
            <a href={videourl} download={animatedVideo}>Download Video</a>
          </video>
        </div>
      )}
    </div>

  )
}

export default App
