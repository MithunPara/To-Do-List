import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
import EditTodoForm from './EditTodoForm';
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

    const deleteItem = id => {
      setItems(items.filter(item => item.id !== id)) // keep the items that do not have the id we want to delete
    }

    const editItem = id => { // update the isEditing attribute of the todo item so the EditTodoForm component will be rendered instead of the regular Todo
      setItems(items.map(item => item.id === id ? {...item, isEditing: !item.isEditing} : item))
    }

    const editTodo = (value, id) => { // update the value of the task that we want to edit and change isEditing attribute back to false
      setItems(items.map(item => item.id === id ? {...item, task: value, isEditing: !item.isEditing} : item))
    }

  return (
    <div className='TodoWrapper'>
        <h1>Reminders</h1>
        {/* Form component on the page where user can input tasks */}
        <TodoForm createItem={createItem} /> 

        {/* Todo item components to display tasks */}
        {/* If we want to edit a todo item, display the EditTodoForm component, otherwise display the regular Todo component */}
        {items.map((item, index) => (
          item.isEditing ? ( 
            <EditTodoForm editTodo={editTodo} task={item} />
          ) :
          (
            <Todo task={item} key={index} handleClick={handleClick} deleteItem={deleteItem} editItem={editItem} />
          )      
        ))}
    </div>
  )
}

export default TodoWrapper;