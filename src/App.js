
import { BrowserRouter as Router,useNavigate,Route,Routes} from 'react-router-dom';
import styles from './app.module.css';
import About from './components/about/About';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { LandingPage } from './components/landing-Page/LandingPage';
import { EasyMemoryGame } from './components/memory-game-difficulty/EasyMemoryGame';
import { HardMemoryGame } from './components/memory-game-difficulty/HardMemoryGame';
import { MediumMemoryGame } from './components/memory-game-difficulty/MediumMemoryGame';
import MemoryGame from './components/newGame/MemoryGame';
import { TimeAttack } from './components/time-attack/TimeAttack';

function App() {
  return (
    <div className={styles.app}>
       <Router>
       
      <Header/>
     
       <Routes>
      <Route path='React-memory-game' element={<LandingPage/>}/>
      <Route path='React-memory-game/about' element={<About/>}/>
      <Route path='/React-memory-game/easy' element={<EasyMemoryGame/>}/>
      <Route path='/React-memory-game/medium' element={<MediumMemoryGame/>}/>
      <Route path='/React-memory-game/hard' element={<HardMemoryGame/>}/>
      <Route path='/React-memory-game/time-attack' element={<TimeAttack/>}/>
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
