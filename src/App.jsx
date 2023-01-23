import { useState } from "react";
import arrowLeft from "./assets/arrow-left.png";
import arrowRight from "./assets/arrow-right.png";
import Logo from "./components/Logo";

// Creó un array para iterar luego, según la cantidad de items a mostrar. No importa el valor de cada elemento del array
const arrayLogos = Array(4).fill(null);

function App() {
  // Estado que indica el indice del logo a enfocar
  const [logoActive, setLogoActive] = useState(0);

  const clickHandlerRight = () => {
    // Si el indice del logo activo es igual al tamaño del array - 1, se setea el logo activo al primero
    if(logoActive === arrayLogos.length - 1) {
      setLogoActive(0);
      return;
    }
    //
    setLogoActive(logoActive + 1);
  }

  const clickHandlerLeft = () => {
    // Si el indice del logo activo es igual a 0, se setea el logo activo al ultimo
    if(logoActive === 0) {
      setLogoActive(arrayLogos.length - 1);
      return;
    }
    setLogoActive(logoActive - 1);
  }

  return (
    <div className="app">
      <section className="container">
        <button className="btn btn-left" onClick={clickHandlerLeft}>
          <img src={arrowLeft} alt="arrow left" />
        </button>
        <div className="container-logos">
          {
            arrayLogos.map((_, index) => (
              <Logo active={logoActive === index ? true : false}/>
            ))
          }
        </div>
        <button className="btn btn-right" onClick={clickHandlerRight}>
          <img src={arrowRight} alt="arrow right" />
        </button>
      </section> 
    </div>
  )
}

export default App
