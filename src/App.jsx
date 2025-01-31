import { useState } from 'react'
import NavBar from './component/NavBar'
import Home from './component/Home'
import SocialLinks from './component/SocialLinks'
import About from './component/About'
import Portfolio from './component/Portfol'
import Experience from './component/Experience'
import Contact from './component/Contact'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <NavBar />
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="socialLinks">
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}

export default App
