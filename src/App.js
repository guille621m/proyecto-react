import logo from './img/guitarras.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tienda de Guitarras
        </a>
      </header>
    </div>
  );
}

export default App;
