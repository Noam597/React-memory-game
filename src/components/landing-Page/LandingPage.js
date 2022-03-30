import React from 'react'
import { useNavigate } from 'react-router-dom';
import { LandingPageArray } from '../arrays/landingPageArray';
import styles from "./landingPage.module.css";


export const LandingPage = () => {

    let navigate = useNavigate()

  return (
    <div className={styles.landingPage}>
        {LandingPageArray.map((card,i)=>{
            return(
                <div className={styles.difficultyCard}>
                    
                    <img src={card.img} alt={card.alt}
                     onClick={()=>{navigate(card.link)}}/>
                    <p>{card.difficulty}</p>
                </div>
                
                
            )
        })}
    </div>
  )
}
