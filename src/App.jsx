import { useState } from 'react'
import reactLogo from './assets/react.svg'
import luztliLogo from './assets/mainLogo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <nav className='navbar'>
        
         <a href="">
          ¿Quiénes somos?
         </a>
         <a href="">
          Tema del mes
         </a>
         <a href="">
          Axollage
         </a>
         <a href="">
          ¡Únete!
         </a>
         <img src="" alt="ig" />
         <img src="" alt="tk" />
      </nav>

      <section className='main'>
        <div className='main_logo'>
        <img src= {luztliLogo} />
        </div>
        <h2>BIENVENIDO A
        <br />
          L U Z T L I
        </h2>
      </section>

      <section className='aboutUs'>
        <h2>¿QUIÉNES SOMOS?</h2>
        <p></p>
      </section>

      <section className='whatWeWant'>
        <div>
          <img src="" alt="whatWeWant-M" />
          <canvas></canvas>
          <h3>MISIÓN</h3>
        </div>
        <div>
          <img src="" alt="WhatWeWant-V" />
          <canvas></canvas>
          <h3>VISIÓN</h3>
        </div>
      </section>

      <section className='imagine'>
        <h2>IMAGINEMOS...</h2>
        <canvas></canvas>
        <p></p>
      </section>

      <section></section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
    </>
    
  )
}

export default App
