import { useContext } from 'react';
import './App.css';
import Cart from "./components/Cart"
import Item from './components/Item';

function App() {
  return (
    <div className="App">
     <Item name="Mac Book Pro" price={2500} />
     <Item name="i Watch" price={250}/>
     <Item name="airpods" price={300}/>
     <Item name="IPhone 15 Pro Max" price={1599}/>
     <Cart/>
    </div>
  );
}

export default App;
