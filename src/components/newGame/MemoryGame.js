import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {shuffle} from 'lodash'
import styles from './testMemoryGame.module.css'
import Overlay from '../overlay/Overlay';

 function MemoryGame({array,difficulty}) {

    let navigate = useNavigate()

    const [cards, setCards] = useState(shuffle([...array,...array]))
    const [flippedCard, setFlippedCard] = useState([]);
    const [matches, setMatches] = useState([]);
    const [start, setStart] = useState(true)
    const [win, setWin] = useState(false)
    const [clicks, setClicks] = useState(0)
    
    const empty ="";
    
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
    }

    const reset = ()=>{
        setFlippedCard([])
        setMatches([]);
        setWin(false);
        setClicks(0)
        reshuffle()
    }

    useEffect(()=>{
        const timer = setTimeout(() => {
            setFlippedCard([])
        }, 2000);
        return ()=> clearTimeout(timer)
    })

    function reshuffle() {
         const shuffler = setTimeout(() => {
           setCards(shuffle([...array,...array])); 
        }, 500);
        return ()=> clearTimeout(shuffler)
    }


    return (
        <div className={styles.gameBoard}>
       
            {start &&(<Overlay
            start={styles.start}
            playAgain={begin}
            title='Start Game'
            />)}
          
            {win &&(<Overlay
            start={styles.won}
            playAgain={reset}
            title='You Won Congratulations!'
            filler={`Number of Clicks: ${clicks}`}
            filler2='want to play again?'
            />)}
            
            <p onClick={()=>{navigate('/React-memory-game')}}><b><u>Return to Main Menu</u></b></p>
             <h1>Difficulty: {difficulty}</h1>
            <div className={styles.tablesize} >
                {cards.map((card,i)=>{
                    const flippedOver = (flippedCard.indexOf(i) !== -1) || matches.indexOf(i) !== -1;
                
      
                  return (<div id={card.id} className={`${styles.cardSize} ` + (flippedOver? `${styles.flipped}`:`${empty}`)} key={i} onClick={()=>flipTheCard(i)}>
                  
                  <div className={styles.inner}>
              <div className={styles.front}>
                  {/* <img src={backOfCard} alt={backAlt}/> */}
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

export default MemoryGame