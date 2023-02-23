import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Carusel from './components/Carusel/Carusel'
import Card from './components/Card/Card';
import Main from './components/Main/Main';
import Counter from './components/Counter/Counter';
import { useState, useEffect} from 'react';
import config from './config.json'
import Spinner from './components/Spinner/Spinner';

function App() {

  const [show, setShow] = useState(true)
  const toggle = () => setShow(!show)
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(false)

  //let styles = {
  //  color:'white',
  //  backgroundColor: 'blue'
  //}


  // ESTADOS DE PROMERA

  // PENDING || PENDIENTE =>

  // FULLFILED => COMPLETADA || EXITOSO
  
  // REJECTED => RECHAZADA !


  const getCards = () => {
    setLoading(true)
    const operacion = new Promise ((resolve, reject) => {
      setTimeout(() => {

        resolve({
          status:200,
          data:config.cards
        })
        //reject("algo salio mal")

      },2000)
      
    })

    operacion.then((resultado,err) => {

      // resultado un objeto, status y data
      setCards(resultado.data)
      console.log(resultado)
    }).catch((err) => {
      console.log(err, " ERROR EN EL CATCH")
      alert("Algo fallo")
    }).finally(() => {
      setLoading(false)
    })
  }
  
  useEffect(() => {
    getCards()
    return() => {
      setCards([])
    }
  }, [])

  return (
    <div>
      <Main>

        {loading && <Spinner/>}
        {<div className='d-flex justify-content-center'>
          {!loading && cards.length > 0 ? cards.map(
            ({titulo, descripcion, img, btnText, btnClassName}, index) => (
              <Card
                key={index}
                titulo={titulo}
                descripcion={descripcion}
                img={img}
                btnText={btnText}
                btnClassName={btnClassName}
              />
            )
          )
        : !loading && 
        cards.length < 1 (
          <h1 className='text-danger text-center'>UPS FALLO LA CARGA</h1> 
        )}
        </div>}

        {/*<Carusel/>*/}
        {/* show ? <Counter /> : null */}
          {/* <Counter/>
          <Counter/> */}

        {/*<button onClick={toggle} > {show ? " Ocultar" : " Mostrar"}</button>*/}
        
        
      </Main>
    </div>
  );
}

export default App;
