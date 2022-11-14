import React, {useState} from 'react';
import Form from './Form'
import './App.css';


function App(){
  const [todos, setTodos] = useState([])
  const toggleComplete = (i) => 
    setTodos(
      todos.map(
        (todo, k) => 
        k === i 
        ? {
          ...todo,
          complete: !todo.complete
        }
      : todo
      )
    )

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <p>Entrer votre tâche et appuyer sur <b>ENTRER</b> pour l'ajouter</p>
      <p>Pour valider la tâche <b>CLIQUER DESSUS</b> pour la barrer</p>
      <Form 
        onSubmit={text => setTodos([{text, complete: false}, ...todos])}
      />
      <div class="list">
        {todos.map(({text, complete}, i) => (
        <div key={text} onClick={() => toggleComplete(i)}
        style={{
          textDecoration: complete ? 'line-through' : ""
        }}
        >
        {text}
        </div>
        ))}
      </div>
      <button onClick={() => setTodos([])}>Reset</button>
    </div>
  )
}

export default App
