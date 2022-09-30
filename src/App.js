
import NavBar from './components/NavBar';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <ItemListContainer texto="Catalogo de productos"/>
    </div>
  );
}

export default App;
