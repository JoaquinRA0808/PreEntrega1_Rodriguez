import React, {useState, useEffect} from 'react'

const Counter = () => {


    const [contador, setContador] = useState (0)
    const [nombre, setNombre] = useState("")
    
    const sumar = () => {
     setContador(contador + 1)
    }
    const restar = () => {
     if ( contador > 1) {
        setContador(contador - 1)
     }
    }

    // Etapas del ciclo de vida de un componente

    // Montar ! || Cargar
    // Change   || Cambios
    // Dismount || Desmontar

    useEffect(() => {
      // Montar cuando termina de cargar
      //alert("El componente está listo")

       if (contador > 0) {
           console.log('contador es mayor a 0')
       }else{
           console.log('contador es menor o igual a 0')
       }

       if (contador === 3) {
           alert('contador llegó a 3')
       }

       return () => {
        // Desmontar \\ Cuando muere
         console.log('el componente murió')
       }
       
    }, [
        contador
        // Si hay cambio
    ])







    
  return (
    <div>
        <h1>Componente</h1>
        <h2>El valor del contador : {contador}</h2>
        <button onClick={sumar}>sumar</button>
        <button onClick={restar}>restar</button>
        <hr />
    </div>
  )
}

export default Counter