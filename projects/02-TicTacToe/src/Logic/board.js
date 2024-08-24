import { WINNER_COMBOS } from "../constants.js"
export const checkWinnerFrom = (boardToCheck)=>{

    //* Revisamos todas las combinaciones ganadoras para ver si X u o Ganó
    for (const combo of WINNER_COMBOS){
      const [a,b,c] = combo
    if(
      boardToCheck[a] &&  //* X u O
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    )
    return boardToCheck[a] //* X u O
  }
  //* Si no hay ganador
  return null
}

//* Revisamos si ya termino el juego
export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square != null)
}