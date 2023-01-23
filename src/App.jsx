import { useState } from "react";
import arrowLeft from "./assets/arrow-left.png";
import arrowRight from "./assets/arrow-right.png";
import Logo from "./components/Logo";

// Creó un array para iterar luego, según la cantidad de items a mostrar. No importa el valor de cada elemento del array
const arrayLogos = Array(4).fill(null);

function App() {
  // Estado que indica el indice del logo a enfocar
  const [logoActive, setLogoActive] = useState(0);


  return (
    <div className="app">
      <section className="container">
        <button className="btn btn-left" >
          <img src={arrowLeft} alt="arrow left" />
        </button>
        <div className="container-logos">
          {
            arrayLogos.map((_, index) => (
              <Logo active={logoActive === index ? true : false}/>
            ))
          }
        </div>
        <button className="btn btn-right">
          <img src={arrowRight} alt="arrow right" />
        </button>
      </section> 
    </div>
  )
}

export default App
