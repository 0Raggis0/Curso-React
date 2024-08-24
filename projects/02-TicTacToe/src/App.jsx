import { useState } from "react"
import confetti from "canvas-confetti"

const TURNS = {  //* Turnos
  X: 'x',
  O: 'o'
}

const Square = ({children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' :''}`
  
  const handleClick = () =>{
    updateBoard(index)
  }

//* Cuando alguien da click en el div ejecuta la funcion 'handleClick' y esta ejecuta la funcion 'updateBoard' desde arriba
  return(
    <div onClick={handleClick} className={className} >  
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function App() {

  //* Creacion del estado del Board de juego
  const [board,setBoard] = useState(
    Array(9).fill(null)
  )

  //* Se crea el estado de los turnos 
  const [turn, setTurn] = useState(TURNS.X)

//* Se crea el estado del ganador
  const[winner, setwinner] = useState(null) //* Null es que no hay ganador y false es que hay un empate

  const checkWinner = (boardToCheck)=>{

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

//* Resetear el juego
const resetGame = () => {
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setwinner(null)
}


const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square != null)
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

    //* Revisar si hay un ganador
    const newWinner = checkWinner(newBoard)
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
        {
          winner != null && (
            <section className="winner">
              <div className="text">
                <h2>
                  {
                    winner === false 
                    ? 'Empate'
                    : 'Gano'
                  }
                </h2>

                <header className="win">
                  {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                  <button onClick={resetGame}>Empezar denuevo</button>
                </footer>
              </div>
            </section>
          )
        }
      </section>
    </main>
  )
}

export default App
