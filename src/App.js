import './App.css';
import {useState} from 'react';

function App() {

  let post = 'wargame TITLE';
  let [bookmark, bookmarkState] = useState('0');

  return (
    <div className="App">
      <div className = "black-nav">
        <h4>wargmae project</h4>
      </div>
      <h4 id={post}> { post } </h4>
      <button onClick={ () => { bookmarkState(34) } }>{bookmark}</button>
    </div>
  );
}

export default App;
