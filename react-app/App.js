import logo from './logo.svg/';
import{useRef, useState} from 'react';
import './App.css';

function App() {
    const[todos, setTodos] = useState([]);

    //Binding
    const todoText = useRef();

    function addTodo(event) {
        event.preventDefault();
        const next = [...todos, todoText.current.value]
        setTodos(next)
        todoText.current.value = ''
    }
    //React component return jsx, which is html embedded with JS
    return (
        <div>
            <ul>
                {todos.map(todo => (<li key={todo}></li>))}
            </ul>
            <form onSubmit={addTodo}>
                <input type="text" placeholder="what needs to be done?" ref={todoText}/>
                <input type="submit" value="Add Todo"/>
            </form>
        </div>
    )
}

export default App;