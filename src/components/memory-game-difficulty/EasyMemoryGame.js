import React from 'react'
import { cardsArray } from '../arrays/cardArrays';
import { luxuryCarsArray } from '../arrays/luxuryCarsArray'
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
