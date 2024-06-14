import React, {useState} from 'react';

const TodoForm = ({createItem}) => { // pass createItem function as a prop to generate new list item when a task is submitted
    const [value, setValue] = useState(''); // state hook to manage user input, set initially to empty string

    const handleChange = event => {
        setValue(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault(); // prevent page from reloading when form is submitted
        createItem(value);
        setValue('');
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='Enter a new task:' onChange={handleChange}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm;