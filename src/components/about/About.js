import React from 'react'
import styles from './about.module.css'
import profile from '../../images/profile.jpg'
const About = () => {
  return (
    <div className={styles.about}>
       <div className={styles.image}>
        <div><img src={profile} alt='profile'/></div>
        
       </div>
       <div className={styles.aboutMe}>
       <h2>created by:</h2>
       <h1> Noam Harris</h1>
       <p>
        Memory Games on multiple difficulties fun for both kids and adults .
        <br/>
        play at your own pace or race against time with the least amount of clicks possible!
        <br/>
        And remember to have fun!
       </p>
       </div>
    </div>
  )
}

export default About