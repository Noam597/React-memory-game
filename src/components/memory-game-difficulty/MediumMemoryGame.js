import React,{useEffect} from 'react'
import { luxuryCarsArray } from '../arrays/luxuryCarsArray'
import MemoryGame from '../newGame/MemoryGame'

export const MediumMemoryGame = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <MemoryGame
     array={luxuryCarsArray}
     difficulty={"Moderate"}
     />
    </>
  )
}
