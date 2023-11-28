import { useState } from 'react';
import CSS from './InputBox.module.css'
const InputButton = function() {
    const [task, setTask] = useState('');
    const [error, setError] = useState('');
    const [todos, setToDos] = useState([]);

    const addToDo = function(event) {
        event.preventDefault();
        if(!task.trim()){
            setError("Task cannot be blank !");
            return;
        }
        if(todos.includes(task)){
            setError("Task already exist in the list");
            return;
        }
        console.log(task)
        setToDos([...todos, task]);      
        setTask('');
        setError('');
    }

    const onInputChangeHandler = function(event) {
        setTask(event.target.value)
    }
    
    const onListClickHandler = function(event){
        console.log(event.target.textContent.trim());
        const itemToRemove = event.target.textContent.trim();
        const updatedItems = todos.filter(item => item !== itemToRemove)
        setToDos(updatedItems);
        console.log(todos);
    }

return(
    <div className={CSS.container}>
        <div className={CSS["to-do-wrapper"]}>
        <form className={CSS.form} onSubmit={addToDo}>
            <label htmlFor="toDo">To Do</label>
            <input id="toDo" type="text" value={task} onChange={onInputChangeHandler} />

            {error && <p className={CSS.error}> {error} </p>}
            <button type='submit' className={CSS["btn-to-do"]}>Add</button>
        </form>
        </div>

        <div className="to-do-list">
            <ul>
                {todos.map((todo, index) => <li onClick={onListClickHandler} className={CSS["list-item"]} key={index}> {todo} </li>)}
            </ul>
        </div>
    </div>
)
}

export default InputButton;