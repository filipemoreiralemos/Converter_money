import icon from "./imgs/dinheiro-icon.png";
import github from "./imgs/github.png";
import "./App.css";
import Conversor from "./components/Conversor";

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <div  className="container"></div>

      
        <img src={icon} className="Icon-money" alt="money" />
      </header>
      
      <section id="content">
        <div className="block">
          <Conversor moedaA="BRL" moedaB="USD"></Conversor>
        </div>
        <div className="block">
          <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
        </div>
        <div className="block">
          <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        </div>
        <div className="block">
          <Conversor moedaA="USD" moedaB="EUR"></Conversor>
        </div>
        <div className="block">
          <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
        </div>
        <div className="block">
       
          <Conversor moedaA="EUR" moedaB="USD"></Conversor>
        </div>
       
      </section>
      <div className="footer">
        <img src={github} className="criador" alt="criador" />
        <a
          href="https://github.com/filipemoreiralemos"
          rel="noreferrer"
          target="_blank"
        >
          Filipe Lemos
        </a>
      </div>
    </div>
  );
}

export default App;
