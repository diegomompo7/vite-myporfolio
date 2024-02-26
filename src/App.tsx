import './App.css'
import { Nav } from './components/Nav/Nav'
import { Header } from './components/Header/Header'
import { About } from './components/About/About'
import { Habilities } from './components/Habilities/Habilities'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
function App() {

  return (
    <div>
     <Nav></Nav>
     <Header></Header>
     <About></About>
     <Habilities></Habilities>
     <Projects></Projects>
     <Contact></Contact>
     <Footer></Footer>
    </div>
  )
}

export default App
