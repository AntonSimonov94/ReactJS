import logo from './logo.svg';
import './App.scss';
import Message from "./Components/Message";

function App() {
  let text = 'Hello';
  return (

    <div className="App">
      <h1><Message text = {text} /></h1>
    </div>
  );
}

export default App;
