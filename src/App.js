import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Carousel from './components/Carousel/Carousel'
import Card from './components/Card/Card';

function App() {

  let styles = {
    color:'white',
    backgroundColor: 'blue'
  }


  return (
    <div>
      <Navbar/>
      <Carousel/>
      <header className="App-header bg-secondary">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a>
      </header>
      <Card
        titulo={"Hola Soy Componente"}
        descripcion={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quae consectetur, totam temporibus incidunt commodi"}
        img={"https://img.lagaceta.com.ar/fotos/notas/2022/10/11/copa-mundo-actual-se-estreno-mundial-alemania-1974-964951-113135.jpg"}
        btnText={"Ver Más"}
      />
      <Card
        titulo={"Componente Dos"}
        descripcion={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quae consectetur, totam temporibus incidunt commodi"}
        img={"https://img.lagaceta.com.ar/fotos/notas/2022/10/11/copa-mundo-actual-se-estreno-mundial-alemania-1974-964951-113135.jpg"}
        btnText={"Ver Más"}
      />
    </div>
  );
}

export default App;
