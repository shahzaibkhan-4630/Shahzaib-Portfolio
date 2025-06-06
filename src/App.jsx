import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import TechStack from './sections/TechStack'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'
import ShowCaseSection from './sections/ShowCaseSection'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <FeatureCards />
      <ShowCaseSection />
      <ExperienceSection />
      <Contact />
      <Footer />
    </>
  )
}

export default App