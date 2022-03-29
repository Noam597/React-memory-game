import React from 'react'
import { animalsArray } from '../arrays/animalsArray'
import MemoryGame from '../newGame/MemoryGame'

export const HardMemoryGame = () => {
  return (
    <>
        <MemoryGame
         array={animalsArray}
         difficulty={"Hard"}
         />
    </>
  )
}
