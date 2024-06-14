import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Todo = ({task}) => { // send task items as a prop to display each todo item
  return (
    <div className='Todo'>
      <p>{task.task}</p> {/* Output the text associated with the given task item */}
      <div>
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  )
}

export default Todo;