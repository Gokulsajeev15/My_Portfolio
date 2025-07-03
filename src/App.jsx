import './App.css'
import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import CustomCursor from '../components/CustomCursor'
import LoadingScreen from '../components/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <CustomCursor />
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
