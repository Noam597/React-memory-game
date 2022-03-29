import React from 'react'
import { luxuryCarsArray } from '../arrays/luxuryCarsArray'
import MemoryGame from '../newGame/MemoryGame'

export const MediumMemoryGame = () => {
  return (
    <>
    <MemoryGame
     array={luxuryCarsArray}
     difficulty={"Moderate"}
     />
    </>
  )
}
