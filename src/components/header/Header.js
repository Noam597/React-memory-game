import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./header.module.css"
import {FaBars,} from 'react-icons/fa'
export const Header = () => {

    let navigate = useNavigate();

    const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={styles.header}>
        <h1>Memory Game</h1> 
        <button onClick={()=>{setOpenMenu(!openMenu)}}><FaBars/></button>
        <div className={`${styles.navbar} ${openMenu && `${styles.menu}`}` }>
          <ul onClick={()=>{setOpenMenu(!openMenu)}}>
            <li onClick={()=>{navigate('React-memory-game')}}>Home</li>
            <li onClick={()=>{navigate('React-memory-game/about')}}>About</li>
          </ul>
        </div>
    </div>
  )
}
