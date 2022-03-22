
import styles from './app.module.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import MemoryGame from './components/newGame/MemoryGame';

function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <MemoryGame/>
      <Footer/>
    </div>
  );
}

export default App;
