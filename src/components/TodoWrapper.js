import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // use uuidv4 to generate new ids for list items

const TodoWrapper = () => {
    const [items, setItems] = useState([]) // store the list of todos in the list

    const createItem = item => { // add new todo items to the list
      setItems([...items, {id: uuidv4(), task: item, completed: false, isEditing: false}]) // use spread operator to add new item onto list of existing items, each list item has a set of defined attributes
      console.log(items)
    }

    const handleClick = id => { // find the matching todo item and update its completed value while keeping the rest of the item the same 
      setItems(items.map(item => item.id === id ? {...item, completed: !item.completed} : item))
    }

  return (
    <div className='TodoWrapper'>
        <h1>Reminders</h1>
        {/* Form component on the page where user can input tasks */}
        <TodoForm createItem={createItem} /> 

        {/* Todo item components to display tasks */}
        {items.map((item, index) => ( 
          <Todo task={item} key={index} handleClick={handleClick} />
        ))}
    </div>
  )
}

export default TodoWrapper;