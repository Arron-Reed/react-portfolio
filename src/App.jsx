import './App.scss'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Skills from './components/skills-slider/Skills'
import About from './components/about/About'
import Projects from './components/projects/Projects'

function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    </div>
  )
}

export default App
