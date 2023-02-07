import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Carusel from './components/Carusel/Carusel'
import Card from './components/Card/Card';
import Main from './components/Main/Main';

function App() {

  let styles = {
    color:'white',
    backgroundColor: 'blue'
  }

  const cards = [
    {
      titulo:"FIFA WORD CUP",
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quae consectetur, totam temporibus incidunt commodi",
      img:"https://img.lagaceta.com.ar/fotos/notas/2022/10/11/copa-mundo-actual-se-estreno-mundial-alemania-1974-964951-113135.jpg",
      btnText:"Ver Más",
      btnClassName:"btn btn-primary"
    },
    {
      titulo:"CHAMPIONS LEAGUE",
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quae consectetur, totam temporibus incidunt commodi",
      img:"https://caracoltv.brightspotcdn.com/dims4/default/3afdd34/2147483647/strip/true/crop/2048x1366+0+0/resize/1000x667!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2F39%2Ff0%2F4b22259e409d9eb185d79fdefa2d%2Ftrofeo-champions.jpg",
      btnText:"Eliminar",
      btnClassName:"btn btn-primary"
    }
  ]


  return (
    <div>
      <Main>
        <Carusel/>
        { //                         UBICAMOS UNO AL LADO DEL OTRO (DE div A div)
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

        </div>}
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
