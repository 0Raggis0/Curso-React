import { useEffect, useState } from "react"

const FollowMouse = () =>{

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x:0 , y:0}) //* Como buena practicaes mejor inicializarlos en un estado

  //* Pointer move
  useEffect(()=>{   //* Siempre el hook debe estar en el cuerpo del componente
  console.log('efecto', {enabled}) 
    
    const handleMove = (event) => {
      const {clientX, clientY} = event
      console.log('handleMove', {clientX,clientY})
      setPosition({x: clientX, y: clientY})
    }
    if(enabled){   //* Nunca se debe meter dentro de un condicional un hook, pero si un condicional dentro de un hook
    window.addEventListener('pointermove',handleMove)
  }

  //! Cleanup
  //* Se ejecuta cuando se desmonta el componente, tambien se ejecuta cuando cambian las dependencias antes de ejecutar el evento denuevo 
  return () => {
    window.removeEventListener('pointermove', handleMove)  //* Limpiamos el addeventlistener
  }

  }, [enabled])  //*Este efecto se debe ejecutar cada vez que pase un valor de enabled


  return (
    <>
    <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
      </>
  )
}

function App() {
  return(
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
