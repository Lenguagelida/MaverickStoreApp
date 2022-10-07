import NavBar from './components/NavBar';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar/>
      <Header/>
      {/* <ItemListContainer/> */}
      <ItemDetailContainer/>
    </>
  );
}

export default App;
