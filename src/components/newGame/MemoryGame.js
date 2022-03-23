import React,{useState,useEffect} from 'react';
import {shuffle} from 'lodash'
import styles from './testMemoryGame.module.css'
import { luxuryCarsArray } from '../arrays/luxuryCarsArray';

 function MemoryGame() {


    const [cards, setCards] = useState(shuffle([...luxuryCarsArray,...luxuryCarsArray]))
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
           setCards(shuffle([...luxuryCarsArray,...luxuryCarsArray])); 
        }, 500);
        return ()=> clearTimeout(shuffler)
    }


    return (
        <div className={styles.gameBoard}>
            {start &&(<div className={styles.overlay}>
                <div className={styles.start} onClick={begin}>
                 <h1>Start Game</h1>
                <p ><b>Click Here</b></p>
                </div>
            </div>) } 

              {win &&(<div className={styles.overlay}>
                <div className={styles.won} onClick={reset}>
                <h1>you won congratulations!</h1>
                <p>Number of Clicks: {clicks}</p>
                <p>want to play again?</p>
                <p ><b>Click Here</b></p>
                
                </div>
            </div>) } 
            <div className={styles.tablesize}>
            

           
                
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