import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {
  return <> 
    <NavBar />
    <ItemListContainer greeting="Hola a todos"/>
  </>
}

export default App;
