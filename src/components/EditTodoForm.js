import React, {useState} from 'react';

const EditTodoForm = ({editTodo, task}) => { // pass editTodo function as a prop to update the list item
    const [value, setValue] = useState(task.task); // state hook to manage user input, set initially to the todo task provided as a prop

    const handleChange = event => {
        setValue(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault(); // prevent page from reloading when form is submitted
        editTodo(value, task.id);
        setValue('');
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='Update selected task:' onChange={handleChange}/>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditTodoForm;