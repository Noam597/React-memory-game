import React from 'react'
import { useNavigate } from 'react-router-dom';
import {FaHandPointLeft,FaHandPointRight} from 'react-icons/fa'
import styles from './overlay.module.css'
const Overlay = ({start,title,filler,filler2,matches,playAgain,mainMenu}) => {

    let navigate = useNavigate()
  return (
    <div className={styles.overlay}>
                <div className={start} onClick={playAgain}>
                 <h1>{title}</h1>
                 <p>{filler}</p>
                <p>{filler2}</p>
                <h2>{matches}</h2>
                <p><b><FaHandPointRight/>Click Here<FaHandPointLeft/></b></p> 
                <p  onClick={()=>{navigate('/React-memory-game')}}><u>Return to Main Menu</u></p>
                </div>
            </div>
  )
}

export default Overlay