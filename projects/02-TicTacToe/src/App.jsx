import { useState } from "react"
import confetti from "canvas-confetti"

import { Square } from "./components/square.jsx"
import { TURNS} from "./constants.js"
import { checkWinnerFrom , checkEndGame} from "./Logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"


function App() {

  //* Creacion del estado del Board de juego
  const [board,setBoard] = useState(()=> {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage): Array(9).fill(null)
    })

  //* Se crea el estado de los turnos 
  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

//* Se crea el estado del ganador
  const[winner, setwinner] = useState(null) //* Null es que no hay ganador y false es que hay un empate

//* Resetear el juego
const resetGame = () => {
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setwinner(null)
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
  
}

  //* Actualiza el turno y el estado de el Board
  const updateBoard = (index) =>{

     //* Si la posicion ya tiene algo no actualizamos
    if(board[index] || winner)return 

    //* Con estas tres lineas mostramos visualmente el estado
    const newBoard = [...board]
    newBoard[index] = turn        
    setBoard(newBoard) 

    //* Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //* Guardar partida

    window.localStorage.setItem('board',JSON.stringify(newBoard))
    window.localStorage.setItem('turn',JSON.stringify(newTurn))
    
    //* Revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner){
      setwinner(newWinner)
      confetti()
    }else if (checkEndGame(newBoard)){
      setwinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset game</button>

      <section className="game">
        {
          board.map((_,index) => {
            return(
              <Square          //* Componente Square
                key={index}                 //* En este caso la key si puede ser index ya que no se repetira
                index={index}                 //* Renderizamos cada uno de los Square
                updateBoard={updateBoard}   //* se pasan como props al componente Square
                >
                  {board[index]}
                </Square>
            )
          })
        }   
      </section>


      <section className="turn"> 
        <Square isSelected={turn === TURNS.X}> 
          {TURNS.X}  
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>


      <section>
        <WinnerModal resetGame={resetGame} winner={winner}/>
      </section>
    </main>
  )
}

export default App
