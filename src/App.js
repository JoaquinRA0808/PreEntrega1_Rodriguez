import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Carusel from './components/Carusel/Carusel'
import Card from './components/Card/Card';
import Main from './components/Main/Main';
import Counter from './components/Counter/Counter';
import { useState, useEffect} from 'react';
import config from './config.json'

function App() {

  const [show, setShow] = useState(true)
  const toggle = () => setShow(!show)

  const [cards, setCards] = useState([])

  //let styles = {
  //  color:'white',
  //  backgroundColor: 'blue'
  //}


  // ESTADOS DE PROMERA

  // PENDING || PENDIENTE =>

  // FULLFILED => COMPLETADA || EXITOSO
  
  // REJECTED => RECHAZADA !


  const getCards = () => {
    const operacion = new Promise ((resolve, reject) => {
      setTimeout(() => {

        //resolve({
        //  status:200,
        //  data:config.cards
        //})
        reject("algo salio mal")

      },2000)
      
    })

    operacion.then((resultado,err) => {

      // resultado un objeto, status y data
      setCards(resultado.data)
      console.log(resultado)
    }).catch((err) => {
      console.log(err, " ERROR EN EL CATCH")
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
        {/*<Carusel/>*/}
          <Counter nombre="Componente 1"/>
          <Counter nombre="Componente 2"/>
          <Counter nombre="Componente 3"/>

        <div className='d-flex'>
          
          {/*cards.map(
            ({titulo, descripcion, img, btnText, btnClassName}, index) => (
              <Card
                key={index}
                titulo={titulo}
                descripcion={descripcion}
                img={img}
                btnText={btnText}
                btnClassName={btnClassName}
                />)
            )*/}

        </div>
        {cards.map(
          ({titulo, descripcion, img, btnText, btnClassName}, index) => (
            <Card
              key={index}
              titulo={titulo}
              descripcion={descripcion}
              img={img}
              btnText={btnText}
              btnClassName={btnClassName}
              Navbar={Navbar}
              />)
          )}
      </Main>
      
      
      {/*<Card
        titulo={"FIFA WORD CUP"}
        descripcion={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quae consectetur, totam temporibus incidunt commodi"}
        img={"https://img.lagaceta.com.ar/fotos/notas/2022/10/11/copa-mundo-actual-se-estreno-mundial-alemania-1974-964951-113135.jpg"}
        btnText={"Ver Más"}
        btnClassName="btn btn-danger fs-1"
      />
        <Card
        titulo={"CHAMPIONS LEAGUE"}
        descripcion={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quae consectetur, totam temporibus incidunt commodi"}
        img={"https://caracoltv.brightspotcdn.com/dims4/default/3afdd34/2147483647/strip/true/crop/2048x1366+0+0/resize/1000x667!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2F39%2Ff0%2F4b22259e409d9eb185d79fdefa2d%2Ftrofeo-champions.jpg"}
        btnText={"Eliminar"}
      />*/}
    </div>
  );
}

export default App;
