import logo from './logo.svg';
import './App.css';
import Firstcomponent from './FirstComponent';

function App() {
  const name="abc"
  const age="28"
  return (
    <div className="App">
      <h1>student details</h1>
      <Firstcomponent n={name} a={age}/>
    </div>
  );
}

export default App;
