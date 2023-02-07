import React, {useState} from 'react'

const Counter = (props) => {

    const {nombre} = props

    /*const [contdor] = React.useState */ //ES LO MUSMO QUE , {useState} de la linea 1
    const [contador, setContador] = useState(0)

    console.log(contador) //0

const sumar = () => setContador(contador + 1)
const restar = () => setContador(contador - 1)

  return (
    <div>
        <h1>{nombre}</h1>
        <h2>El valor del contador : {contador}</h2>
        <button onClick={sumar}>sumar</button>
        <button onClick={restar}>restar</button>
    </div>
  )
}

export default Counter