
import './App.css';
import Card from './components/Card';
import data from './data/events1'
import { useState } from 'react';
import CardCompleta from './components/CardCompleta';

function App() {
  let [mostrarOcultar,setMostrarOcultar] = useState(false)
  let [numeroCambiar, setNumeroCambiar] = useState(0)

  let hide = () => {
    setMostrarOcultar(!mostrarOcultar)
  }

  let next = () => {
    if (numeroCambiar < data.length - 1) {
      setNumeroCambiar(++numeroCambiar)
    } else {
      setNumeroCambiar(0)
    }
  }
  let back = () => {
    if (numeroCambiar > 0) {
      setNumeroCambiar(--numeroCambiar)
    } else {
      setNumeroCambiar(data.length - 1)
    }
  }
  
  return (
    mostrarOcultar ? 
    (<Card category={data[numeroCambiar].category} image={data[numeroCambiar].image} next={next} hide={hide} back={back} />) 
    :
    (<CardCompleta category={data[numeroCambiar].category} image={data[numeroCambiar].image} name={data[numeroCambiar].name} description={data[numeroCambiar].description}  next={next} hide={hide} back={back} />) 
  );
}
//linea 8 para utilizar una variable de JS, se emplea directa con {}
export default App;
