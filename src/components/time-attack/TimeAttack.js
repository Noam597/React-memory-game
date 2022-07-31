import React,{useState,useEffect,useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import {shuffle} from 'lodash'
import styles from './timeAttack.module.css'
import { timeAttackArray,backCard } from '../arrays/timeAttackArray';


export const TimeAttack = () => {


    let navigate = useNavigate()

    const gameTimerRef = useRef()

    const [cards, setCards] = useState(shuffle([...timeAttackArray,...timeAttackArray]))
    const [flippedCard, setFlippedCard] = useState([]);
    const [matches, setMatches] = useState([]);
    const [start, setStart] = useState(true)
    const [win, setWin] = useState(false)
    const [lost, setLost] = useState(false)
    const [timeAninmation, setTimeAninmation] = useState('')
    const [clicks, setClicks] = useState(0)
    const [seconds, setSeconds] = useState(50)
    const [minutes, setMinutes] = useState(1);
  
    const empty ="";
   
    var numSec 
   
    if(seconds < 10){
        numSec = "0" + seconds
    }else{
        numSec = seconds
    }
  
    
    const flipTheCard =(index)=>{
        setClicks(clicks + 1)
        if(flippedCard.length === 0){
            setFlippedCard([index]) 
        }
        if(flippedCard.length === 1){
            console.log(flippedCard)
            const firstCard = flippedCard[0];
            const secondCard = index;

            if(flippedCard.includes(index)){
                setFlippedCard([index])
        }else{
            if(cards[firstCard] === cards[secondCard]){
                console.log("match found")
                if(matches.length + 2 === cards.length){
                    setWin(true) 
                }
                setMatches([...matches,firstCard,secondCard]);
                console.log(matches)
            }
            setFlippedCard([...flippedCard,index])
        }}
        if(flippedCard.length === 2){
            console.log(flippedCard)
            console.log(matches)
            setFlippedCard([index]) 
        }
    }

    const begin = ()=>{
        setStart(false)
        setSeconds(prevSeconds =>prevSeconds - 1);
    } 

       useEffect(() => {
                gameTimerRef.current =  setInterval(beginCountDown,1000)
            if(seconds === 0 && minutes === 0){
                clearInterval(gameTimerRef.current)
            }
                if(win){
                    clearInterval(gameTimerRef.current)
                }
                // setWin(true)
                if(seconds <=10 && seconds > 0 && minutes === 0){
                    setTimeAninmation(`${styles.timer}`)
                }else{
                    setTimeAninmation(``)
                }
        return ()=>{clearInterval(gameTimerRef.current)}
    },[seconds])

    const beginCountDown = async ()=>{
        if(start === false){
           setSeconds(prevSeconds =>prevSeconds - 1);
             countDown()
             console.log(seconds)
      }
    
}
  const countDown = ()=>{
        if(seconds === 0){
            setMinutes(minutes - 1)
            setSeconds(59)
        }
        if(seconds === 1 && minutes === 0 && matches.length + 2 === cards.length){
            
             setWin(true)
        }
        else if(seconds === 1 && minutes === 0 && matches.length + 2 !== cards.length){
            setLost(true);  
        } 
    }

    const reset = ()=>{
        setFlippedCard([])
        setMatches([]);
        setWin(false);
        setLost(false)
        setClicks(0)
        reshuffle()
        setMinutes(1)
        setSeconds(50)
    }

    

    useEffect(()=>{
        const timer = setTimeout(() => {
            setFlippedCard([])
        }, 2000);
        return ()=> {clearTimeout(timer)}
    })

    function reshuffle() {
         const shuffler = setTimeout(() => {
           setCards(shuffle([...timeAttackArray,...timeAttackArray])); 
        }, 500);
        return ()=> clearTimeout(shuffler)
    }


    return (
        <div className={styles.gameBoard}>
            {start &&(<div className={styles.overlay}>
                <div className={styles.start} onClick={begin}>
                
                 <h1>Start Game</h1>
                <p><b>Click Here</b></p>
                <p onClick={()=>{navigate('/React-memory-game')}}><b><u>Return to Main Menu</u></b></p>
                </div>
            </div>) } 

              {win &&(<div className={styles.overlay}>
                <div className={styles.won} onClick={reset}>
                <h1>you won congradulations!</h1>
                <p>Number of Clicks: {clicks} Time:{minutes}:{numSec}</p>
                <h2>All Matches Found</h2>
                <p>want to play again?</p>
                <p ><b>Click Here</b></p>
                <p onClick={()=>{navigate('/React-memory-game')}}><b><u>Return to Main Menu</u></b></p>
                </div>
            </div>) }

            {lost &&(<div className={styles.overlay}>
                <div className={styles.lost} onClick={reset}>
                <h1>Times Up! You Lose</h1>
                <p>Number of Clicks: {clicks}</p>
                <h2>Matches Found {matches.length}</h2>
                <p>want to play again?</p>
                <p ><b>Click Here</b></p>
                <p onClick={()=>{navigate('/React-memory-game')}}><b><u>Return to Main Menu</u></b></p>
                </div>
            </div>) }
            <p onClick={()=>{navigate('/React-memory-game')}}><b><u>Return to Main Menu</u></b></p>
             <h1 className={styles.title}>Difficulty: Time Attack <span className={timeAninmation}>{minutes}:{numSec}</span></h1>
            <div className={styles.tablesize} >
                {cards.map((card,i)=>{
                    const flippedOver = (flippedCard.indexOf(i) !== -1) || matches.indexOf(i) !== -1;
                
      
                  return (<div id={card.id} className={`${styles.cardSize} ` + (flippedOver? `${styles.flipped}`:`${empty}`)} key={i} onClick={()=>flipTheCard(i)}>
                  
                  <div className={styles.inner}>
              <div className={styles.front}>
                  <img src={backCard.img} alt={backCard.alt}/>
              </div>
              <div className={styles.back}>
                  <img src={card.img} alt={card.alt} />
                  </div>
                  </div>
              </div>)
                  })} 
                  </div>
                  <div className={styles.stats}>
                  <>
                  
                  </>
                  <h2>
                  Clicks: {clicks}
                  </h2>
                  <h2> Pairs found: {matches.length/2}</h2>
                   <button  onClick={reset}>reshuffle</button>
                  </div>
              
        </div>
    )
}
