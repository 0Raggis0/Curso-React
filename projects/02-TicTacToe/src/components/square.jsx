
export const Square = ({children, isSelected, updateBoard, index}) => {
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