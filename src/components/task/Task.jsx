import { FaTimes } from 'react-icons/fa';
import { useContext } from 'react';
import TasksContext from '../context/TasksContext';

function Task({ task }) {
  const { deleteTask, toggleReminder } = useContext(TasksContext);
  return (
    <div
      className={`task ${task.reminder && 'reminder'} `}
      onDoubleClick={() => toggleReminder(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes color='red' onClick={() => deleteTask(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
