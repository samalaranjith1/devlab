import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Products from './components/Products';
import Counter from './components/Counter';
import { useState } from 'react';
import App1 from './components/Product/App'
function App() {

  const [count,setCount] = useState(0)
  const handleClick=()=>{
    setCount(count+1)
  }
  return (
    <div className="App">
      <Button />
      <Products />
      <Counter count={count} onClick={handleClick}/>
      <Counter count={count} onClick={handleClick}/>
      <App1 />
    </div>
  );
}

export default App;
