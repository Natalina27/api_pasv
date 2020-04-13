import React, {useState} from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const getTodos = () =>{
    console.log('todos is getting execute');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
              console.log(json);
              setTodos(json);
        }

        )

  };
  return (

    <div className="App">
      <button onClick={getTodos}> Get todos </button>
        {
            todos &&
                todos.map( el => (
                    <div key={el.id}>{el.title}</div>
                ))

        }
    </div>
  );
}

export default App;
