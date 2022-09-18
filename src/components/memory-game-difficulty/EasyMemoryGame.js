import React from 'react'
import { cardsArray } from '../arrays/cardArrays';
import MemoryGame from '../newGame/MemoryGame';

export const EasyMemoryGame = () => {
  return (
    <>
        <MemoryGame
         array={cardsArray}
         difficulty={"Easy"}
         />
    </>
  )
}
