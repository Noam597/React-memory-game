import React,{useEffect} from 'react'
import { animalsArray } from '../arrays/animalsArray'
import MemoryGame from '../newGame/MemoryGame'

export const HardMemoryGame = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <MemoryGame
         array={animalsArray}
         difficulty={"Hard"}
         />
    </>
  )
}
