import { useState } from 'react'
import './App.css'
import Fetchapi from './API/Fetchapi'
import Axiosapi from './API/Axiosapi'
import useInViewAnimation from './Components/Custom Hook/useInViewAnimation';

function App() {

  const [ref, isVisible] = useInViewAnimation(0.9); // 30% viewport

  return (
    <section ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""}`}>
      < Fetchapi />
      <Axiosapi />

    </section>
  )
}

export default App
