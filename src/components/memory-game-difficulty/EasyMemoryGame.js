import React, { useEffect } from "react";
import { cardsArray } from "../arrays/cardArrays";
import MemoryGame from "../newGame/MemoryGame";

export const EasyMemoryGame = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MemoryGame array={cardsArray} difficulty={"Easy"} />
    </>
  );
};
