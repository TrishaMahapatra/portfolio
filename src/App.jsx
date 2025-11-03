import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import Header from './components/Header'
import Cover from './components/Cover'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import WorkSample from './pages/WorkSample'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Element, Link } from 'react-scroll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

function Main() {
  return (
    <>
      {/* <Cover /> */}
      <div className='h-screen'>
        <Header />
        <Home />
        <About />
        <Services />
        <WorkSample />
        <Contact />
        <footer className="h-16 bg-amber-200">

        </footer>
      </div>
    </>
  )
}

export default App
